import React, {Component} from 'react';


//gives our searchbar a bunch of function from the react functionality. 
class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {term: ''}
	}
	render() {
		return (
			<div>
				<input 
					value = {this.state.term}
					onChange={event => this.setState({ term: event.target.value})}
				/>
			</div>
		);
	}
}
export default SearchBar;