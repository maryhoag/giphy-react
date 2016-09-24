var React = require('react');

//require child
var AddGifs = require('./AddGifs');

var helpers = require('../utils/helpers.js');

var Main = React.createClass({

	getInitialState: function() {

		return {

			gifTag: String,

		}

	},

	addToGallery: function() {

			gifTag = document.getElementById('search');

			searchFunction(gifTag);

			gifArray = response.data;
	},

	render: function() {

		return (

			<div>

				<h1>Gif Search </h1>

				<form>
					gif search: <input type="text" name="searchterm" id="search"> </input>

					<button id="addButton" onClick={"addToGallery"} > press me </button>
				</form>


				<AddGifs />

			</div>
		)
	}
});

module.exports = Main;

