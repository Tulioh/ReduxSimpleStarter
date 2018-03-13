import React, { Component } from 'react';

export default class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return <input onChange={(event) => console.log(event.target.value)} />;
	}
}
/** Alternative way to declare export **/
// export default SearchBar;