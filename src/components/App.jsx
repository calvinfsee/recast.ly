import Search from './Search.js';
import VideoList from './VideoList.js';

import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import youtubeVideoData from '/src/data/youtubeVideoData.js';
import searchYouTube from '/src/lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.searchYouTube = props.searchYouTube;
    this.state = {
      videoList: exampleVideoData,
      current: exampleVideoData[0],
      currentId: exampleVideoData[0].id.videoId
    };
  }
  componentDidMount() {

    searchYouTube('oaf1', (data) => {
      this.setState({
        videoList: data,
        current: data[0],
        currentId: data[0].id.videoId
      });
    });


  }

  onVideoClick (video) {
    this.setState({
      current: video
    });
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em></h5></div>
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em></h5></div>
            <div>
              <VideoPlayer video={this.state.current} />
            </div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em></h5></div>
            <VideoList onClick={this.onVideoClick.bind(this)} currentId={this.state.currentId} videos={this.state.videoList} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;