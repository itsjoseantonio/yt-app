import axios from 'axios';

const KEY = 'AIzaSyAzdt0cCQPPTOcLA2Ey4lEJp5zm-afDKq0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
