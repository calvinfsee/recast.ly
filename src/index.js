// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import youtubeVideoData from './data/youtubeVideoData.js';

// searchYouTube('oaf1', (data) => {

// });
ReactDOM.render(<App />, document.getElementById('app'));