import Axios from 'axios';

const KEY = 'AIzaSyB0uVY3pQ4TXONQGjsb8K26d8KgVM_Uq-I';

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params : {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
