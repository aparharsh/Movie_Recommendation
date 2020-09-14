
# FrontEnd

## Designing of wire frame on Adobe XD

Our project start with designing the basic layout of pages which is designed in Adobe XD after finalizing the design of the pages we started the development of pages. Frontend of the site is make using react js. We used visual studio code as a text editor. Also node is used as package downloader.

## Making static site

Initial development of website was made considering a static site. Everything was hard coded. One of the major problem arise is placement of carousel above a background image. For this we download a third party library named "react-infinite-carousel" using npm install. Then we customize the carousel accordingly. After designing home page we moved to designing or our main display page. Where we want to show the searched movie. This page too was hard coded in beginning. After designing the basic static website, we created a dummy data in a different folder and  render website using that data by passing prop(properties) in various components. 

Another problem we found out tha we are not able to change the link of background images properly. We couldn't able to find solutions that can work along with our code. This problem is solved by concatenating the link which we get as props.

## Adding background animation

After completing we then tried to give it a better look. For this we add a library for background animation named "Particle.js". Then customize its colors, motion speed , number of nodes accordingly. And fixed some positional issue which happens due to addition of background animation.

## Making pages responsive

Then final static website works fine on desktop. But as we resize the window complete layout get messed up a lot of time spent on making the site to make work fine on different screen sizes. To make site responsive we wrote media queries for different ranges of screen size.
Till know backend API was created and we started to make our site dynamic. Wrote different functions for fetching and changing values of state to render pages.

## Adding extra features

### After finalizing we added some below mentioned extra features to our site
1. Added suggestions of during typing 
2. Added filter button that allow user to get recommendations on different preferences
3. Added cast biography that can be seen by clicking on actor/actress profile pic.
4. Added details of some best imdb movies on home page.

#Backend

Now coming to the Backend part of the project.
Flask was used to connect the front end to our model which is written in python.
We have divided the backend into various parts for better explaination.

## Database Creation:

We used two different database for Hollywood and Bollywood movies. We got it from several resources and did data pre-processing on it. Pre-Processing included creating unique IMDb values, filling in missing values, dropping unnecessary columns with large number of empty values, etc. Later we found that it didn't had many movies from 2017 onwards, especially in Hollywood dataset. We scraped a list of movies from Wikipidea movies of 201X and then scraped the movie details from TMDb api, using movie title and IMDb id. After preparing the data that we needed to show on our homepage we saved it with the name “movie_dataset”.

## Cast and Crew:
For each movie we only had one director and 3 actors data in our dataset which is obviously not enough. So when each movie is called we got the list of 1/2 director of the movie and 4-5 top casts of that movie by scraping the data from IMDb using IMDb id of the particular movie. Following that basic data of that cast/crew was scrapped from its respective wikipidea page. Also it's poster path is foinf and returned to frontend.We skimmed through our dataset and returned top 5 popular movies of the actor/director he has worked in and give the movies link along the cast details.

## Movie Recommendation:
We used Content-Based Filtering for our movie recommendation.
Basic approach for it was using TF-IDF Vectorizer. Initially, we made a processed dataset containing the title, year of release, rating, genre, director, cast and processed overview.

For Processed Overview, we removed the Stop Words and Lemmatized each word of the overview for better comparison.  Stop Words are unnecessary words, such as prepositions (of, at, etc.). Lemmatization is a process of converting words into their root-words. For Example, the word ‘historical’ becomes, ‘history’.

Following that, for our basic recommendations, we first a string concatenating the responsible parameters, and then converted the respective strings into vectors using TF-IDF. Namely we used genre, director, cast and overview for the creation of string. We didn't took each of them once, but multiple times, depending on how good the recommendations were. Following the creation of each vector, tf-vectorizer was used to assign value to each movie vector. Now we just need to multiply a movie value to all the values of other movie to get Cosine Similarities. Sorting them will tell us how close a particular vector is to other vectors, in essence telling us how close the other movie is to current movie based on the provided parameters. Instead of storing a matrix of all the movie * movies, we stored this list of tf-idf values and later for each movie multiplied, sorted them and returned top 10 so as to get the desired result.
We have provided two filters, Popularity and Language as well. In language, we first remove all the movies of other language than the current movie, followed by sorting them and then returning top 10 movies. In popularity, we took top 40 movies instead of 10 and then we found the Weighted-Rating using the formula used by IMDb:

"Where we kept quantile as 0.75 to calculate min number of votes required and finally returned top 10 movies after sorting in descending
order by the weighted rating.”

Other than this, our app offers you to choose Preferences. You can choose which factor your recommendations should give preference to. Choosing any one, basically inceases its value in final recommendation system. For this, we just increased its value in the vector and re-calculated the tf-idf list of values. As there are mainly 3 parameters, we are giving option to choose preferences from namely genre, director and cast, there are 8 possible ways of preference being chosen. Where none of being chosen as preference and all of them being chosen, amounts to same.

For this, we created 6 more lists and saved them using binary code. For example, genre was given 1 cast 2 and director 3 so 001 in binary told us that the 1st element in the list of lists containing giving preference to genre 101 or 5 or ls[5] give us a list which gives preference both to genre and director and so on. In the end we had in total 6 lists stored in our system.

Last but not the least the poster URL stored in our database wasn't working. So for each movie we went to TMDb, called its API to get JSON format of its movie details and returned it's poster path.

## User Reviews & Sentiment Analysis:

Now for each movie we scraped the top 5 comments from IMDb and displayed the comments on our comments section. Following that we did sentiment analysis (NLP) on our comments to classify a particular comment into 5 different categories.
🔥: Positive
🤩: Somewhat positive
😄: Neutral
🙁: Somewhat negative
😔: Negative

For Preprocessing this data, we took each comment and removed the stopwords & lemmatized each word of the comment and run the saved model to get the results. We used Pickle, a python package for saving and loading our model.

### Model:

For creation of the model we used dataset from Kaggle which contained Rotten Tomato (website) reviews and sentiments categorised from 1-5. Initially, basic Pre-Processing was done and both stemmed and lemmatized version for the comments were generated. After that it was split in train and test data and Multinomial Naive Bayes model was run to see how it performed. We saw that lemmatized reviews performed better than stemmed reviews and hence, lemmatizer was used in the final model. The training model accuracy was around 67% and testing accuracy was around 63% for our model. It was saved and later used in our app.

###Notes:

1) After getting the dataset we later found that there are few movie names which were occurring multiple times in our dataset, we removed duplicate names but later found that only first movie was retained and it was often seen that specially in bollywood, a movie with same name was released in earlier years. Hence later we for the movies with name occuring multiple times we added the year of release to the movie name and now dropped the duplicate names retaining the last. This was happening because we still had few movies in bollywood which also occured in our Hollywood dataset with language saved as English in later one.

2) the time taken to load our page is because of extensive scrapping we did for each movie for our comments, information on cast and also to get poster path for each recommendation. If api is accessed or the data is somehow stored the opening speed of each movie can be improved several times.

3) out recommendations are not perfectly accurate because we only used basic content filtering and also mainly 3 categories for it. If tagline, description and all is used it can lead to much better recommendations. Also currently collaborative filtering, hybrid filtering, etc is being used in big sites. We tried that as well but due to initial difficulty in setting and saving each user database we kept that aside for future improvements on our project.

### Extra
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).