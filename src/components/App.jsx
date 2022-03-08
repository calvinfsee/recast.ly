import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '/src/data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      video: {}
    };
    this.searchYouTube = this.props.searchYouTube.bind(this);
  }

  componentDidMount() {
    this.searchYouTube('cat', (data) => {
      this.setState({
        videos: data,
        video: data[2]
      });
    });
  }

  onClick (video) {
    this.setState({
      video: video
    });
  }

  handleSubmit (query) {
    this.searchYouTube(query, (data) => {
      this.setState({
        videos: data,
        video: data[0]
      });
    });
  }

  handleChange (query) {
    this.searchYouTube(query, (data) => {
      this.setState({
        videos: data,
        video: data[0]
      });
    });
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em></h5></div>
            <Search handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em></h5></div>
            <div>
              { <VideoPlayer video={this.state.video} /> }
            </div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em></h5></div>
            <VideoList onClick={this.onClick.bind(this)} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;