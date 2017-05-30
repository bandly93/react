import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCh7oq6a5gHJAdQ1sj7KCsxar_taqZTXPc';

//Create a new component. This should produce some HTML.
class App extends Component{

	constructor(props){
		super(props);
		this.state = {videos: []};
		
		YTSearch({key: API_KEY, term:'lakers'},(videos) => {
			this.setState = ({videos});
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos = {this.state.videos}/>
			</div>
		);
	}
}

//Take this component's generated HTML and put it on the page.
ReactDOM.render(<App />, document.querySelector('.container'));