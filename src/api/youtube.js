import axios from 'axios';

const KEY = 'AIzaSyCut-7Lsbie2fvA0ERYY364nA-6sXAToxY';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 10,
        type : 'video',
        key: KEY
    }
});