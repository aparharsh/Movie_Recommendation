import axios from 'axios';

const instance =  axios.create({
    baseURL: 'https://movierecommendationsyste-85e35.firebaseio.com/'
});

export default instance;