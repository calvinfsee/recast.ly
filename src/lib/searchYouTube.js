import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, successCB) => {
  return $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    data: {
      q: query
    },
    type: 'GET',
    success: successCB,
  });
};

export default searchYouTube;