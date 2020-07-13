import { analyseArticle , postData , UpdateUi} from './Analyse.js'
import "babel-polyfill";

export function handleSubmit(event){
	event.preventDefault()
	//check what user inputted
	let url = document.getElementById('url').value
	// let polarity = document.getElementById('polarity')
	// let subject = document.getElementById('subjectivity')
	
	//regex pattern developed by rodneyrehm (https://gist.github.com/rodneyrehm/8013067) used 17/04/2020
    let url_pattern = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#]+\.?)+(\/[^\s]*)?$/i;
    
	if(url == "" || !url.match(url_pattern))
		alert("enter valid url")
	else{
			console.log(":::Data Entered:::")
			analyseArticle({value:url})
		}
	}

//