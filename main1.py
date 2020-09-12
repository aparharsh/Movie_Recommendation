from flask import Flask, jsonify, request
from flask_cors import CORS
import numpy as np
import pandas as pd
import requests
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
# import nltk
# import pickle
# from nltk.corpus import stopwords
# from nltk.stem import PorterStemmer
from bs4 import BeautifulSoup

import config
from tmdbv3api import TMDb

tmdb = TMDb()
tmdb.api_key = config.tmdb_api_key

from tmdbv3api import Movie
tmdb_movie = Movie()

# nltk.download('stopwords')
# nltk.download('PorterStemmer')
# nltk.download('RegexpTokenizer')
# stop = stopwords.words('english')

# model = pickle.load(open('datasets/model.sav', 'rb'))
sent = {0:'negative', 1:'somewhat negative', 2:'neutral', 3:'somewhat positive', 4:'positive'}

df = pd.read_csv('datasets/main_dataset.csv')

# must be hide before deployment, using config.py
api_key = config.api_key

# app = Flask(__name__)

# for deploying 

app = Flask(__name__, static_folder='build', static_url_path='')

CORS(app)

print('Apar Running Very Well')

# api for deploying
@app.route('/', methods=["GET"])
def index():
    return app.send_static_file('index.html')

# cast and crew bio, birthdays, images data scraped.
# df is the main dataframe.
def cast_crew(id):
    response = requests.get('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=' + api_key)
    dic=[]
    if 'status_code' in response.json().keys():
        for idx,i in enumerate(df[df['imdb_id']==id]['dir_name'].str.split('|')):
            if idx>1:break
            ls = []
            for j in df[df['dir_name']==i['name']].sort_values(by=['imdb_votes'], ascending=False).index:
                if len(ls)>4:break
                ls.append(df['original_title'][j])
            dic.append({ 'job':'Director',
                        'name':i,
                        'bio':'Unavailable',
                        'poster':'Unavailable',
                        'birthday':'Unavailable',
                        'deathday':'Unavailable',
                        'known_for':ls })
        leng = len(dic)
        for idx,i in enumerate(df[df['imdb_id']==id]['actors'].str.split('|')):
            if idx+leng>6:break
            ls = []
            for j in df[df['actors']==i['name']].sort_values(by=['imdb_votes'], ascending=False).index:
                if len(ls)>4:break
                ls.append(df['original_title'][j])
            dic.append({ 'job':'Actor',
                        'name':i,
                        'bio':'Unavailable',
                        'poster':'Unavailable',
                        'birthday':'Unavailable',
                        'deathday':'Unavailable',
                        'known_for':ls })
    else:
        if len(response.json()['crew'])==0:
            for idx,i in enumerate(df[df['imdb_id']==id]['dir_name'].str.split('|')):
                if idx>1:break
                ls = []
                for j in df[df['dir_name']==i['name']].sort_values(by=['imdb_votes'], ascending=False).index:
                    if len(ls)>4:break
                    ls.append(df['original_title'][j])
                dic.append({ 'job':'Director',
                            'name':i,
                            'bio':'Unavailable',
                            'poster':'Unavailable',
                            'birthday':'Unavailable',
                            'deathday':'Unavailable',
                            'known_for':ls })
        else:
            for i in response.json()['crew']:
                if len(dic)>=2:break
                if i['job'] == 'Director':
                    ls = []
                    for j in df[df['dir_name']==i['name']].sort_values(by=['imdb_votes'], ascending=False).index:
                        if len(ls)>4:break
                        ls.append(df['original_title'][j])
                    id1 = i['id']
                    response1 = requests.get('https://api.themoviedb.org/3/person/' + str(id1) + '?api_key='+api_key)
                    dic.append({'job':'Director',
                                'name':response1.json()['name'],
                                'bio':response1.json()['biography'],
                                'poster':'Unavailable' if response1.json()['profile_path']==None else 'http://image.tmdb.org/t/p/original/' + response1.json()['profile_path'],
                                'birthday':response1.json()['birthday'],
                                'deathday':response1.json()['deathday'],
                                'known_for':ls })
        
        if len(response.json()['cast'])==0:
            leng = len(dic)
            for idx,i in enumerate(df[df['imdb_id']==id]['actors'].str.split('|')):
                if idx+leng>6:break
                ls = []
                for j in df[df['actors'].str.contains(i['name'])].sort_values(by=['imdb_votes'], ascending=False).index:
                    if len(ls)>4:break
                    ls.append(df['original_title'][j])
                dic.append({ 'job':'Actor',
                            'name':i,
                            'bio':'Unavailable',
                            'poster':'Unavailable',
                            'birthday':'Unavailable',
                            'deathday':'Unavailable',
                            'known_for':ls })
        else:
            leng = len(dic)
            for idx,i in enumerate(response.json()['cast']):
                if idx+leng>6:break
                ls = []
                for j in df[df['actors'].str.contains(i['name'])].sort_values(by=['imdb_votes'], ascending=False).index:
                    if len(ls)>4:break
                    ls.append(df['original_title'][j])
                id1 = i['id']
                response1 = requests.get('https://api.themoviedb.org/3/person/' + str(id1) + '?api_key='+api_key)
                dic.append({'job':'Actor',
                            'name':response1.json()['name'],
                            'bio':response1.json()['biography'],
                            'poster':'Unavailable' if response1.json()['profile_path']==None else 'http://image.tmdb.org/t/p/original/' + response1.json()['profile_path'],
                            'birthday':response1.json()['birthday'],
                            'deathday':response1.json()['deathday'],
                            'known_for':ls })
            
    return dic

####### RECOMMENDOR SYSTEM ######

md_mod1=pd.read_csv("datasets/processed_data1.csv")

# reading the fit_transform data
lis=[]
for i in range(7):
    s=''
    s='datasets/ls'+str(i)+'.npy'
    lis.append(np.load(s,allow_pickle=True))
lis=np.concatenate((lis[0],lis[1],lis[2],lis[3],lis[4],lis[5],lis[6]))

# Getting poster path from tmdb api
def getposter(x):
    result = tmdb_movie.search(x)
    if(len(result)>0):
        movie_id = result[0].id
        response = requests.get('https://api.themoviedb.org/3/movie/{}?api_key={}'.format(movie_id,tmdb.api_key))
        data_json = response.json()
        if(str(data_json['poster_path'])):
            return (data_json['poster_path'])
        else:
        	return (np.nan)
    else:
        return (np.nan)

# Default Recommendations with preferance order

def final_recom(title,val,md_mod8,ls):    
    
    md_mod8 = md_mod8.reset_index()
    titles = md_mod8['original_title']
    indices = pd.Series(md_mod8.index, index=md_mod8['original_title'])
    idx = indices[title]
    
    tfidf_matrix = ls[val]
    cosine_sim = linear_kernel(tfidf_matrix[idx], tfidf_matrix).flatten()
    sim_scores=list(enumerate(cosine_sim))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:31]
    movie_indices = [i[0] for i in sim_scores]
    
    return md_mod8.iloc[movie_indices,:]

# Filter for Popularity

def weighted_rating(x,m,C): 
    v = x['vote_count']
    R = x['vote_average']
    return (v/(v+m) * R) + (m/(m+v) * C)

def improved_recom(title,val,md_mod1,tot_movies,quant,ls):
    
    md_mod1 = md_mod1.reset_index()
    titles = md_mod1['original_title']
    indices = pd.Series(md_mod1.index, index=md_mod1['original_title'])
    idx = indices[title]
    
    tfidf_matrix = ls[val]
    cosine_sim = linear_kernel(tfidf_matrix[idx], tfidf_matrix).flatten()
    sim_scores=list(enumerate(cosine_sim))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:tot_movies+1]
    movie_indices = [i[0] for i in sim_scores]
    movies=md_mod1.iloc[movie_indices]
    # movies.loc[:,'cos']=list(sim_scores)
    # movies.loc[:,'cos']=movies.loc[:,'cos'].apply(lambda x: x[1].astype(float))
    
    vote_counts = movies[movies['vote_count'].notnull()]['vote_count'].astype('int')
    vote_averages = movies[movies['vote_average'].notnull()]['vote_average'].astype('int')
    C = vote_averages.mean()
    m = vote_counts.quantile(quant)
    qualified = movies[(movies['vote_count'] >= m) & (movies['vote_count'].notnull()) & (movies['vote_average'].notnull())]
    qualified.loc[:,'vote_count'] = qualified.loc[:,'vote_count'].astype('int')
    qualified.loc[:,'vote_average'] = qualified.loc[:,'vote_average'].astype('int')
    qualified.loc[:,'wr'] = qualified.apply(lambda x:weighted_rating(x,m,C), axis=1)
    # qualified.loc[:,'wrcos']=qualified.loc[:,'wr']*qualified.loc[:,'cos']
    
    # qualified=qualified.sort_values('wrcos',ascending=False).head(10)
    qualified = qualified.sort_values('wr', ascending=False).head(10)
    qualified.loc[:,'vote_average'] = qualified.loc[:,'vote_average'].astype('str')
    return qualified

# Filter for Language

def lang_recom(title,val,md_mod1,ls,p,tot_movies,quant):    
    
    lang=md_mod1.loc[md_mod1.original_title==title,'language'].values
    #md_mod1=md_mod1.loc[md_mod1.language==lang[0],:]
    md_mod1 = md_mod1.reset_index()
    titles = md_mod1['original_title']
    indices = pd.Series(md_mod1.index, index=md_mod1['original_title'])
    idx = indices[title]
    
    tfidf_matrix = ls[val]
    cosine_sim = linear_kernel(tfidf_matrix[idx], tfidf_matrix).flatten()
    sim_scores=list(enumerate(cosine_sim))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    #sim_scores = sim_scores[1:31]
    movie_indices = [i[0] for i in sim_scores]
    md=md_mod1.iloc[movie_indices]
    # md['cos']=list(sim_scores)
    # md['cos']=md['cos'].apply(lambda x: x[1].astype(float))
    md=md.loc[md.language==lang[0],:]
    md=md.iloc[1:41,:]
    
    if(p==1):
        
        movies=md.copy()
        vote_counts = movies[movies['vote_count'].notnull()]['vote_count'].astype('int64')
        vote_averages = movies[movies['vote_average'].notnull()]['vote_average'].astype('int64')
        C = vote_averages.mean()
        m = vote_counts.quantile(quant)
        qualified = movies[(movies['vote_count'] >= m) & (movies['vote_count'].notnull()) & (movies['vote_average'].notnull())]
        qualified.loc[:,'vote_count'] = qualified.loc[:,'vote_count'].astype('int64')
        qualified.loc[:,'vote_average'] = qualified.loc[:,'vote_average'].astype('int64')
        qualified.loc[:,'wr'] = qualified.apply(lambda x:weighted_rating(x,m,C), axis=1)
        # qualified['wrcos']=qualified['wr']*qualified['cos']

        # qualified=qualified.sort_values('wrcos',ascending=False).head(10)
        qualified = qualified.sort_values('wr', ascending=False).head(10)
        qualified.loc[:,'vote_average'] = qualified.loc[:,'vote_average'].astype('str')
        md=qualified.copy()
    
    return md

#Final Recommendations/Filters

#l-cast
#m-director
#n-genre
#k-language
#p-popularity

def recommend(title,l=0,m=0,n=0,k=0,p=0):
    tot_movies=40
    quant=0.75
    
#     md=pd.read_csv("/home/vidz/Desktop/vidz/Jupyter/Movie Recommendation System/datasets/main_dataset.csv",index_col='Unnamed: 0')
#    model=pd.read_csv("/home/vidz/Desktop/vidz/Jupyter/Movie Recommendation System/datasets/processed_dataset.csv",index_col='Unnamed: 0')
#    lis=np.load('fit_data.npy',allow_pickle=True)
    model=md_mod1.copy()
    val=l*(2**2)+m*(2**1)+n*(2**0)
    if (val==7):
        val=0
    if(k==0 and p==0):
        md_recom=final_recom(title,val,model,lis).head(10)
    elif(k==0):
        md_recom=improved_recom(title,val,model,tot_movies,quant,lis).head(10)
    else:
        md_recom=lang_recom(title,val,model,lis,p,tot_movies,quant).head(10)
    res=md_recom.loc[:,['original_title','poster_path','vote_average']]
    for i in range(len(res)):
        g=''
        g=str(getposter(str(res.iloc[i,0])))
        if(len(g)>10):
            res.iloc[i,1]=g
    return res
    
## scraping comments and sentiment analysis
def cmnt(id):
    
    # tokenizer = nltk.RegexpTokenizer(r"\w+")
    
    page=requests.get('https://www.imdb.com/title/' + id + '/reviews?ref_=tt_urv')
    soup = BeautifulSoup(page.content, 'html.parser')
    cmnts=[]
    dic=[]
    ls=[]
    for idx, i in enumerate(soup.find_all('div', attrs={'class':"text show-more__control"})):
        if idx > 4:break
            
        s = i.get_text()
        cmnts.append(s)
        # s = tokenizer.tokenize(s)
        # s = [PorterStemmer().stem(i) for i in s]
        # s = [item for item in s if item not in stop]
        # s = ' '.join(s)
        
        # ls.append(s)
        
    # result = model.predict(ls)
    # respo=[sent[x] for x in result]
	
    for i in range(len(cmnts)):
        dic.append({'comment':cmnts[i],'emoji':'neutral'})
    return dic

########################################################################33

### apis code

# top 10 movies to be sent for the start page.
@app.route('/home', methods = ['GET'])
def home_data():
    # home_dt={}
    home_dt=[]
    df1=df[df['language']=='hi']
    for i in df1.sort_values(by='imdb_votes', ascending=False).head(3).index:
        p_p = df1['poster_path'][i]
        home_dt.append({'title' : df1['original_title'][i],
        				'poster_path' : p_p if p_p.count('/')>3 else 'http://image.tmdb.org/t/p/original/' + p_p,
        				'genres' : df1['genres'][i].split('|'),
        				'rating' : df1['imdb_rating'][i],
        				'vote_count' : df1['imdb_votes'][i],
        				'overview':df['story'][i] }) 
    df1=df[df['language']=='en']
    for i in df1.sort_values(by='imdb_votes', ascending=False).head(7).index:
        p_p = df1['poster_path'][i]
        home_dt.append({'title' : df1['original_title'][i],
        				'poster_path' : p_p if p_p.count('/')>3 else 'http://image.tmdb.org/t/p/original/' + p_p,
        				'genres' : df1['genres'][i].split('|'),
        				'rating' : df1['imdb_rating'][i],
        				'vote_count' : df1['imdb_votes'][i],
        				'overview':df['story'][i] })
    
    return jsonify(home_dt)

# suggestions while the user types the title.
@app.route('/suggestions', methods = ['POST'])
def suggestions():
	s = request.get_json()['title'].lower()
    print('Vidit Suggestion Called')
	return jsonify(df[df['search_title'].str.contains(s)].sort_values(by='imdb_votes', ascending = False).head()['original_title'].values.tolist())

# when the user searches a movie title.
@app.route('/recom', methods = ['POST'])
def recom():

    title = request.get_json()['title']
    
    if title in df['original_title'].values :
       
        idx = df[df['original_title']==title].index[0]
        to_be_sent = {}
        to_be_sent['title']=df['original_title'][idx]
        to_be_sent['genres']=df['genres'][idx].split('|')
        to_be_sent['runtime']=df['runtime'][idx]
        to_be_sent['rating']=df['imdb_rating'][idx]
        to_be_sent['vote_count']=df['imdb_votes'][idx]
        to_be_sent['overview']=df['story'][idx]
        g=''
        g=str(getposter(str(df.iloc[idx,3])))
        if(len(g)>10):
            df.iloc[idx,5]=g
        p_p = df['poster_path'][idx]
        to_be_sent['poster_path']= p_p if p_p.count('/')>3 else 'http://image.tmdb.org/t/p/original/' + p_p
        to_be_sent['cast']=cast_crew(df['imdb_id'][idx])
        to_be_sent['release_date']=df['release_date'][idx]
        rec=recommend(title)
        dic=[]
        for i in rec.index:
        	p_p = rec['poster_path'][i]
        	dic.append({'title':rec['original_title'][i],
        									'poster_path':p_p if p_p.count('/')>3 else 'http://image.tmdb.org/t/p/original/' + p_p,
        									'rating':rec['vote_average'][i]})
        to_be_sent['recom_mov'] = dic
        to_be_sent['comments'] = cmnt(df['imdb_id'][idx])

        return jsonify(to_be_sent)

    else:
        return jsonify('Sorry. The searched Title was not in our Database. Use drop-down suggestions for better surfing!')

# when the user applies some filter filter
@app.route('/filter', methods = ['POST'])
def filter():
    title = request.get_json()['title']
    l = int(request.get_json()['cast'])
    m = int(request.get_json()['director'])
    n = int(request.get_json()['genre'])
    k = int(request.get_json()['language'])
    p = int(request.get_json()['popularity'])
    fil_mov = {}
    rec = recommend(title,l,m,n,k,p)
    dic=[]
    for i in rec.index:
    	p_p = rec['poster_path'][i]
    	dic.append({'title':rec['original_title'][i],
    									'poster_path':p_p if p_p.count('/')>3 else 'http://image.tmdb.org/t/p/original/' + p_p,
    									'rating':rec['vote_average'][i]})
    fil_mov['fil_mov'] = dic
    return jsonify(fil_mov)


if __name__ == '__main__':
    app.run(debug=False)