require('dotenv').config()
const analyse = require('./analyse.js')
const express = require('express');
const app = express();
const cors = require('cors');
const port= process.env.PORT
const bodyParser= require('body-parser');

const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
	application_id: process.env.APP_ID,
	application_key: process.env.APP_KEY
});


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cors())
app.use(express.static('dist'))

app.listen(port,function(){
	console.log(`server is running at ${port}`)
})

app.get('/',function(req,res){
	res.sendFile('dist/index.html')
})

app.post('/test',async function(req,res){ 
	//{value:url}
	let x = await analyse(req.body)
	console.log(x);
	 res.send(x)
})


