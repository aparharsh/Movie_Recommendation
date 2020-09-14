
# FrontEnd

## Designing of wire frame on Adobe XD

Our project starts with <b>designing the basic layout</b> of pages which is designed in <b>Adobe XD</b>. After finalizing the design of the pages, we start with the development. Frontend of the site is made using <b>react js</b>. Also <b>node</b> is used as the package downloader.

## Making static site

Initial development of website is made considering a static site. Everything is <b>hard coded</b>. One of the major problem which arises is placement of carousel above a background image. For this we download a third party library named <b>"react-infinite-carousel"</b> using <b>npm install</b>. Then we customize the carousel accordingly. After designing home page we move to designing our main display page, where we want to show the searched movie. This page too is hard coded in beginning. After designing the basic static website, we create a dummy data in a different folder and render the basic outline of our website. 

## Adding background animation

We then go forward to create a dynamic and interactive background. For this we add a library named <b>"Particle.js"</b>. Then customize its colors, motion speed , number of nodes accordingly. After fixing some positional issue which happens due to addition of background animation our background is set.

## Making pages responsive

Final static website works fine on desktop. But as we <b>resize the window</b>, complete layout get messed up and a lot of time is spent on making the site to make work fine on different screen sizes. To make site responsive we write media queries for different ranges of screen size.

Till know backend API's is created and we start to make our site dynamic. This is followed by writing different functions for fetching and changing values of static data to render the pages.

## Adding extra features

### After finalizing we added some below mentioned extra features to our site
1. Adding suggestions for the movie during typing 
2. Adding filter button that allow user to get recommendations on different preferences
3. Adding cast biography that can be seen by clicking on actor/actress profile pic.
4. Adding details of some best imdb movies on home page.

# Backend

Now coming to the Backend part of the project.

<b>Flask</b> is used to connect the front end to our model which is written in <b>python</b>.
We have divided the backend into various parts for better explaination.

## Database Creation:

We use two different database for <b>Hollywood</b> and <b>Bollywood</b> movies. We got it from several resources such as Kaggle, other repos,etc and do basic <b>data pre-processing</b>. Pre-Processing includes creating <b>unique IMDb values</b>, filling in <b>missing values</b>, dropping unnecessary columns with large number of empty values, etc. Later we find that it doesn't have many movies from 2017 onwards, especially in Hollywood dataset. 

We <b>scrape a list</b> of movies from Wikipidea movies of 201X followed by scraping the <b>movie details from TMDb api</b>, using <b>movie title</b> and <b>IMDb id</b>. After preparing the data that we need to show on our homepage we save it as <b>“movie_dataset”</b>.

## Cast and Crew:

For each movie we only had one director and 3 actors data in our dataset which is obviously not enough. So when each movie is called we get the list of <b>1(or 2) director</b> of the movie and <b>4-5 top casts</b> of that movie by scraping the data from <b>IMDb using IMDb id</b> of the particular movie. Following that, basic data of that cast/crew is <b>scrapped</b> from its respective <b>wikipidea page</b>. 

We also get their poster path and return it to frontend. We skim through our dataset and return <b>top 5 popular movies</b> of the particular actor/director and return the <b>movies link</b> along the <b>cast details</b>.

## Movie Recommendation:

To <b>personalise</b> our recommendations, I am going to build an engine that computes <b>similarity between movies</b> based on certain metrics and suggests movies that are <b>most similar</b> to a particular movie that a user liked. Since we will be using movie metadata (or content) to build this engine, this also known as <b>Content Based Filtering</b>.

#### Processing database and Creating vector

What we plan on doing is creating a <b>metadata dump</b> for every movie which consists of <b>genres, director, main actors and overview</b>. We then use a <b>Count Vectorizer</b> to create our <b>count matrix</b>. We then calculate the <b>cosine similarities</b> and return movies that are <b>most similar</b>.

These are steps I follow in the preparation of my <b>genres, director and cast</b> data:

1) <b>Strip Spaces</b> and <b>Convert to Lowercase</b> from all our features. This way, our engine will not confuse between <b>Johnny Depp</b> and <b>Johnny Galecki</b>.

2) For starters we dont need to process our <b>Genre</b>. We simply remove <b>all unneccessary characters</b> (such as '|') and simply create a <b>string</b> of genre separated by <b>" ", blank space</b>.

3) For <b>Processing the Overview</b>, we removed the <b>Stop Words</b> and <b>Lemmatized</b> each word of the overview for better comparison.
_<b>Stop Words</b> are <b>unnecessary or common words</b> which <b>don't contribute much value</b>, such as prepositions (of, at, etc.). <b>Lemmatization</b> is a process of converting words into their root-words. For Example, the word ‘historical’ becomes, ‘history’. Lemmitization helps in comparison and <b>capturing the essence</b> of the sentence._

4) We take each of the categories <b>multiple times</b> so that each one contributes <b>different weights</b> to the final model. Cuurently we plan to take <b>Director 4 times</b> followed by taking <b>Genre and Cast each 3 times</b>. This is because they have multiple values. These values were found to give best results after repeated trials. _For now we avoid using overview as it due to its length it has large impact on result._

#### TF-IDF and Cosine Similarity

I will be using the <b>Cosine Similarity</b> to calculate a <b>numeric quantity</b> that denotes the similarity between two movies. Mathematically, it is defined as follows:<br>
                                                   <b>cosine(x,y)=(x.y⊺)/(||x||.||y||)</b>
                                            
Since we have used the <b>TF-IDF Vectorizer</b>, calculating the <b>Dot Product</b> will directly give us the <b>Cosine Similarity Score</b>. Therefore, we will use <b>sklearn's linear_kernel</b> instead of cosine_similarities since it is much faster.

After <b>multiplying </b>the particular movie score with other movies scores we get a list of <b>cosine similarities</b>. Sorting them will tell us how <b>close a particular vector</b> is to other vectors, in essence telling us how <b>similar</b> the other movie is to current movie. 

### Filters

##### Language
One thing that we notice about our recommendation system is that it recommends movies <b>without considering</b> its base <b>language</b>. A person who wants to see recommendation for a <b>bollywood movie</b> might prefer getting <b>hindi movies</b> only as recommendation. Hence, before sorting we <b>remove the other languages</b> and sort the remaining movies based on similarity score returning <b>top 10</b>.

#### Popularity and Ratings
Another thing that we notice is that it recommends movies regardless of <b>ratings and popularity</b>. Therefore, we add a filter to remove bad movies and return movies which are popular and have had a <b>good critical response</b>. We take the <b>top 40 movies</b> based on similarity scores and calculate the vote of the <b>75th percentile movie</b>. Then, using this as the value of <b>m (min votes required)</b>, we will calculate the <b>weighted rating</b> of each movie using <b>IMDB's formula.</b>
Mathematically, it is represented as follows:

                Weighted Rating (WR) =  (v/(v+m).R)+(m/(v+m).C)
                where,

                v is the number of votes for the movie
                m is the minimum votes required to be listed in the chart
                R is the average rating of the movie
                C is the mean vote across the whole report


##### Preferances
Other than this, our app also offers to choose <b>Preferences</b>. You can choose which <b>factor</b> should be given <b>preference</b>, while <b>recommending movies</b>. Choosing any one, basically inceases its contributed value in <b>final recommendation system</b>. For this, we just <b>increase its frequency</b> in the vector and <b>re-calculate the tf-idf</b> list of values. As there are mainly <b>3 parameters</b>, we are giving option to choose preferences from namely <b>genre, director and cast</b>, there are <b>8 possible ways</b> of preference being chosen. Where <b>none of being chosen</b> as preference and <b> all being chosen</b>, amounts to same. In the end we <b>list containing 7 different lists.</b>

For this, we create <b>6 more lists</b> and save them via <b>binary index refering</b>. For example, if <b>genre is considered ones, cast as tens and director as hundreds</b> so if only genre is chosen the we get <b>001</b> in <b>binary</b>. Which tells us to use <b>1st element</b> in the list of lists. If we get return code of <b>101</b> which is essentially <b>5 or ls[5]</b>, which tells us to us 5th list stored which is stored by giving preferance to <b>director and genre</b>.

##### Add. Info.

Last but not the least the <b>poster URL</b> stored in our database was <b>outdated</b>. So for each movie we went to <b>TMDb</b>, called <b>its API</b> to get <b>JSON format</b> of its movie details and returned it's <b>poster path.</b>

## User Reviews & Sentiment Analysis:

Now for each movie we <b>scrape the Top 5 comments</b> from <b>IMDb</b> and display in on our comments section. Following that we have to do <b>Sentiment Analysis (NLP)</b> on our comments to <b>classify</b> a particular comment into <b>5 different categories</b>.
<br>  🔥: Positive
<br>  🤩: Somewhat positive
<br>  😄: Neutral
<br> 🙁: Somewhat negative
<br> 😔: Negative

For <b>Preprocessing</b> this data, we take each comment and remove the <b>stopwords & lemmatized</b> each word of the comment. We run the saved model to get the results. We use <b>Pickle</b>, a python package for <b>saving and loading our model</b>.
These are all from <b>nltk library package</b> in python.
_For details regarding stopwords and lemmitization please refer to preprocessing in overview above ^_

#### Model:

For creation of the model we use <b>dataset from Kaggle</b> which contains <b>Rotten Tomato (website) reviews</b> and sentiments are categorised from 1-5. Initially, basic Pre-Processing is done (use of <b>tokenizer</b>) and both <b>stemmed and lemmatized version</b> for the comments are generated. After that it is split in <b>train and test data</b>. <b>Multinomial Naive Bayes model</b> is run to see how it performs. 

We see that lemmatized reviews performed better than stemmed reviews and hence, <b>lemmatizer</b> is used in the <b>final model</b>. The <b>training model accuracy</b> was around <b>67%</b> and <b>testing accuracy</b> was around <b>63%</b> for our model. <b>Neural Network</b> can be used to <b>improve the accuracy</b> to more than 75~80%.

_Here also count vectorizer is used in creating the model followed by training on TF-IDF vectors with Mult. Naive Bayes_

### Notes:

1) After getting the dataset we later found that there are few movie names which were <b>occurring multiple times</b> in our dataset. This was happening because there are <b>multiple movies</b> release with <b>same name in later years</b>. Also, we still had few movies in <b>Bollywood</b> which were in <b>Hollywood</b> dataset with <b>language as English</b>.  
Hence later we added the <b>year of release</b> to <b>duplicate titles</b>. Now we <b>dropped</b> the <b>repeating</b> movie titles <b>retaining</b> one.

2) The slightly <b> long time taken</b> to load our page is because of <b>extensive scrapping</b> we did for each movie for our comments, information on cast and also to get poster path for each recommendation. If <b>api</b> is accessed or the data is <b>somehow stored</b> the loading speed of each movie can be improved.

3) Our recommendations are not <b>perfectly accurate</b> because we only used <b>basic content filtering</b> and also <b>mainly 3 categories</b> for it. If tagline, description and others are used it can lead to much <b>better recommendations</b>. Also currently <b>collaborative filtering, hybrid filtering, etc</b> is being used in other big sites. We <b>tried that as well</b>, but due to <b>initial difficulty</b> in <b>setting and saving</b> each user database we kept that aside for <b>future improvements</b> on our project.

# Deployment

Our app is deployed for free on <b>Heroku Web Services</b>. We faced some difficulties while deploying the app. There were some versions not compatible in <b>requirement.txt</b> file and also some problems arose while writing <b>nltk.txt</b> file.
Despite few limitations faced due to free deployment services, our app could be accesed using:
<b>https://blackbox-asv.herokuapp.com/</b>

### Extra
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
