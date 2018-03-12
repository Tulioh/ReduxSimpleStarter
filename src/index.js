import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCEVo3MoZnfxAAgFM45yDVyJPp64Zu_iGc';

// Function creation example 1
/*const element = (
	<div>Hi!</div>
);

ReactDOM.render(element, document.querySelector('.container'));
*/

// Function creation example 2
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));