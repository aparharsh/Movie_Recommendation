from flask import Flask, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
import requests
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

# address to be added as per the location in git branch.
df = pd.read_csv('')

app = Flask(__name__)
CORS(app)

# cast and crew bio, birthdays, images data scraped.
# df is the main dataframe.
def cast_crew(id):
    response = requests.get('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=' + api_key)
    dic=[]
    if 'status_code' in response.json().keys():
        for idx,i in enumerate(df[df['imdb_id']==id]['dir_name'].str.split('|')):
            if idx>1:break
            lis = []
            for j in df[df['dir_name']==i['name']].sort_values(by=['imdb_votes'], ascending=False).index:
                if len(lis)>4:break
                lis.append(df['original_title'][j])
            dic.append({ 'job':'director',
                        'name':i,
                        'bio':'Unavailable',
                        'poster':'Unavailable',
                        'birthday':'Unavailable',
                        'deathday':'Unavailable',
                        'known_for':lis })
        for idx,i in enumerate(df[df['imdb_id']==id]['actors'].str.split('|')):
            if idx-len(dic)>6:break
            lis = []
            for j in df[df['actors']==i['name']].sort_values(by=['imdb_votes'], ascending=False).index:
                if len(lis)>4:break
                lis.append(df['original_title'][j])
            dic.append({ 'job':'actor',
                        'name':i,
                        'bio':'Unavailable',
                        'poster':'Unavailable',
                        'birthday':'Unavailable',
                        'deathday':'Unavailable',
                        'known_for':lis })
    else:
        if len(response.json()['crew'])==0:
            for idx,i in enumerate(df[df['imdb_id']==id]['dir_name'].str.split('|')):
                if idx>1:break
                lis = []
                for j in df[df['dir_name']==i['name']].sort_values(by=['imdb_votes'], ascending=False).index:
                    if len(lis)>4:break
                    lis.append(df['original_title'][j])
                dic.append({ 'job':'director',
                            'name':i,
                            'bio':'Unavailable',
                            'poster':'Unavailable',
                            'birthday':'Unavailable',
                            'deathday':'Unavailable',
                            'known_for':lis })
        else:
            for i in response.json()['crew']:
                if len(dic)>=2:break
                if i['job'] == 'Director':
                    lis = []
                    for j in df[df['dir_name']==i['name']].sort_values(by=['imdb_votes'], ascending=False).index:
                        if len(lis)>4:break
                        lis.append(df['original_title'][j])
                    id1 = i['id']
                    response1 = requests.get('https://api.themoviedb.org/3/person/' + str(id1) + '?api_key='+api_key)
                    dic.append({'job':'director',
                                'name':response1.json()['name'],
                                'bio':response1.json()['biography'],
                                'poster':'Unavailable' if response1.json()['profile_path']==None else 'http://image.tmdb.org/t/p/original/' + response1.json()['profile_path'],
                                'birthday':response1.json()['birthday'],
                                'deathday':response1.json()['deathday'],
                                'known_for':lis })
        
        if len(response.json()['cast'])==0:
            for idx,i in enumerate(df[df['imdb_id']==id]['actors'].str.split('|')):
                if idx-len(dic)>6:break
                lis = []
                for j in df[df['actors'].str.contains(i['name'])].sort_values(by=['imdb_votes'], ascending=False).index:
                    if len(lis)>4:break
                    lis.append(df['original_title'][j])
                dic.append({ 'job':'actor',
                            'name':i,
                            'bio':'Unavailable',
                            'poster':'Unavailable',
                            'birthday':'Unavailable',
                            'deathday':'Unavailable',
                            'known_for':lis })
        else:
            for idx,i in enumerate(response.json()['cast']):
                if idx-len(dic)>6:break
                lis = []
                for j in df[df['actors'].str.contains(i['name'])].sort_values(by=['imdb_votes'], ascending=False).index:
                    if len(lis)>4:break
                    lis.append(df['original_title'][j])
                id1 = i['id']
                response1 = requests.get('https://api.themoviedb.org/3/person/' + str(id1) + '?api_key='+api_key)
                dic.append({'job':'actor',
                            'name':response1.json()['name'],
                            'bio':response1.json()['biography'],
                            'poster':'Unavailable' if response1.json()['profile_path']==None else 'http://image.tmdb.org/t/p/original/' + response1.json()['profile_path'],
                            'birthday':response1.json()['birthday'],
                            'deathday':response1.json()['deathday'],
                            'known_for':lis })
            
    return dic


### apis code

# top 10 movies to be sent for the start page.
@app.route('/home', methods = ['GET'])
def home_data():
	home_dt={}
	for i in df.sort_values(by='imdb_rating', ascending=False).head(10).index:
	    home_dt[df['original_title'][i]] = df['poster_path'][i]
	return jsonify(home_dt)

# suggestions while the user types the title.
# @app.route('/suggestions', methods = ['GET'])
# def suggestions():
# 	return jsonify(df['original_title'].values[]) 

# either use the above function or the below one.

# suggestions while the user types the title.
@app.route('/suggestions', methods = ['POST'])
def suggestions():
	s = request.get_json()['title'].lower()
	return jsonify(df[df['search_title'].str.contains(s)].sort_values(by='imdb_rating', ascending = False).head()['original_title'].values)

# when the user searches a moviw title.
@app.route('/recom', methods = ['POST'])
def recom():
	# can be changed as per the format of data recieved from frontend.
	title = request.get_json()['title']
	id = df[df['original_title']==title].index
	to_be_sent = {}
	to_be_sent['title']=df['original_title'].values[df[df['imdb_id']==id].index][0]
	to_be_sent['genres']=df['genres'].values[df[df['imdb_id']==id].index][0].split('|')
	to_be_sent['runtime']=df['runtime'].values[df[df['imdb_id']==id].index][0]
	to_be_sent['rating']=df['imdb_rating'].values[df[df['imdb_id']==id].index][0]
	to_be_sent['vote_count']=df['imdb_votes'].values[df[df['imdb_id']==id].index][0]
	to_be_sent['overview']=df['story'].values[df[df['imdb_id']==id].index][0]
	to_be_sent['cast']=cast_crew(id)
	to_be_sent['release_date']=df['release_date'].values[df[df['imdb_id']==id].index][0]
	# to_be_sent['recom_mov']

# when the user applies some filter filter
@app.route('/filter', methods = ['POST'])
def filter():

if __name__ == '__main__':
	# app.run()
	app.run(debug = True)