require('dotenv').config()
const polyfill = require('babel-polyfill');
function analyseArticle(urlInput){//{value:url}
	// Function to analyse an article
	const AYLIENTextAPI = require('aylien_textapi');
    const textapi = new AYLIENTextAPI({
     	application_id: process.env.APP_ID,
		application_key: process.env.APP_KEY
    });

    // result object that is going to be returned
    let resultobj = {}
    
	return new Promise(resolve => {
		textapi.sentiment({
			"url": urlInput.value
			}, function(error, response) {
				if (error === null) {
					resultobj.polarity = response.polarity;
					resultobj.subjectivity = response.subjectivity;
					resultobj.text = response.text;
					resolve(resultobj)
				}
				else{
					console.log(error)
					resultobj.error = error
					resolve(resultobj)
				}
			});
	});
}

module.exports = analyseArticle 