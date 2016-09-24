var axios = require('axios');

var helpers = {

	searchFunction: function(gifTag) {

		var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + gifTag + "&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({url: queryUrl, method:'GET'}).done(function(response) {
			console.log(response);


			return(response);

			// for(var i = 0; i < response.data.length; i++) {
			// 	console.log(response.data[i].bitly_url);

			// 	//change to a span or display in line
			// 	var b = $("<div>").addClass("gif_div section");


			// 	//var test = $("<p>");
			// 	//$(test).append("it works!");
			// 	//$("#gifGallery").append(test);


			// 	var image = $("<img>");
			// 	var image_url = response.data[i].images.fixed_height_small_still.url;
			// 	var gif_url = response.data[i].images.fixed_height.url;

			// 	console.log(response.data[i].images.fixed_height_small.mp4);
			// 	console.log(gif_url);
			// 	console.log(image_url);
			// 	$(image).attr("data-fixed", image_url);
			// 	$(image).attr("data-animated", gif_url);
			// 	$(image).attr("src", image_url);
			// 	$(image).attr("display", "inline");
			// 	$(image).attr("data-state", "fixed");
			// 	$(image).addClass("giphy");
			// 	//$(image).addClass("divider section");

			// 	$(b).append(image);

			// 	var rating = response.data[i].rating;
			// 	console.log(rating);
			// 	var c = $("<span>");
			// 	$(c).append("Rating: " + rating).addClass("gif_rating divider");
			// 	$(b).append(c);

			// 	$("#gifGallery").prepend(b);

	}

};

module.exports = helpers;