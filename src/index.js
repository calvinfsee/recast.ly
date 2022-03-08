// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import youtubeVideoData from './data/youtubeVideoData.js';

ReactDOM.render(<App searchYouTube={searchYouTube.bind(this)} />, document.getElementById('app'));