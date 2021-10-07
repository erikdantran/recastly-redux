import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import _ from 'lodash';


// var handleVideoSearch = (q) => {
//   console.log(q);
//   //TODO:  Write an asynchronous action to handle a video search!
//   return (dispatch) => {
//     searchYouTube({key: YOUTUBE_API_KEY, query: q}, (videos) => {
//       console.log(videos);
//       dispatch(changeVideoList(videos));
//     });
//   };
// };

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return _.debounce((dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, (videos) => {

      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });
  }, 1000);
};

export default handleVideoSearch;