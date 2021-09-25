import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import Search from './Search.js';


class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      videos: [],
      video: exampleVideoData[0]
    };
  }

  onClickVideo(video) {
    this.setState({video: video});
  }

  componentDidMount() {
    var options = {
      key: '',
      query: 'React',
      max: 5,
    };
    this.props.searchYouTube(options, data => this.setState({videos: data, video: data[0]}));
  }

  onTypeSearch(searchText) {
    var option = {
      key: '',
      query: searchText,
      max: 5,
    };

    this.props.searchYouTube(option, data => this.setState({videos: data, video: data[0]}));
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search onChange={(searchText) => this.onTypeSearch(searchText)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div> <VideoPlayer video = {this.state.video}/> </div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos = {this.state.videos} onClick = {(video) => this.onClickVideo(video)}/> </div>
          </div>
        </div>
      </div>
    );
  }
}
// Make it so that when the title of a VideoListEntry is clicked, that video is displayed in the player. Do not add state to any of the functional components.

//when clicking on




// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;