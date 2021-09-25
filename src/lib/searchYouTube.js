import YOUTUBE_API_KEY from '../config/youtube.js';
import API_KEY from '../config.js';

var searchYouTube = (options, callback) => {
  // TODO
  //calling search youtube
  console.log('options', options);
  $.ajaxPrefilter(function (settings, _, jqXHR) {
    jqXHR.setRequestHeader('Authorization', API_KEY);
  });

  $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos', {
    // youtube_api_key: YOUTUBE_API_KEY,
    key: options.key,
    q: options.query,
    maxResults: options.max
  }, (data) => callback(data)
  );

};

export default searchYouTube;

// Use jQuery to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint

// Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint

// Accept an q string to search for

// Make sure all the tests for searchYouTube are passing. You can open the tests with npm test

// Note: the API also accepts a query param of youtube_api_key with your youtube api key to get additional searches once our key reaches its daily limit.