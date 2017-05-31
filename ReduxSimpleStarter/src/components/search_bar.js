import React, {Component} from 'react';


//gives our searchbar a bunch of function from the react functionality. 
class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {term: ''}
	}
	render() {
		return (
			<div className = "search-bar">
				<input 
					value = {this.state.term}
					onChange={event => this.onInputChange(event.target.value)}/>
			</div>
		);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}
export default SearchBar;