export async function postData(url,Url)//{value:'https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f'}
{//{value:url}
	const response = await fetch(url,{
		method: 'POST',
		credentials: 'same-origin', 
		headers: {
		'Content-Type': 'application/json',
		},
		body: JSON.stringify(Url),
	})
	
	try{
		const newData = await response.json()
		//console.log(newData);
		return newData;
	}
	catch(error) {
		console.log("error", error);
	}
}

export async function analyseArticle(obj){//{value:url}
	postData('/test',obj)
	 .then(res=>{console.log(res)
	 	return res;
	}).then(obj => {UpdateUi(obj)})
}

function UpdateUi(obj){
	polarity.innerHTML = obj.polarity
	subjectivity.innerHTML = obj.subjectivity
	text.innerHTML = obj.text
	if(obj.polarity == 'positive')
		document.body.style.backgroundColor='#9799BA'
	if(obj.polarity == 'negative')
		document.body.style.backgroundColor='#CFCFC4'
	if(obj.polarity == 'neutral')
		document.body.style.backgroundColor='#DEA5A4'
}

//analyseArticle({url:'https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f'})
