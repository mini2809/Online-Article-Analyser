This is a WebApp in which  I am evaluating a News article using Natural Language Processing.
I am using a third party API "AYLIEN API" .In this there is a text Analysis API which inputs a article/sentence and give as its Polarity ,Subjectivity and other parameters.

I have build this App using webpack to bundle Assets and for increasing Performance.
Webpack provides plugins and loaders to ease the task.
I have used css preprocessor that is SASS to make css styles handy and maintainable.
I have also used service worker for caching and providing offline content .
I have also used jest for manual testing purpose and created my own test cases to test the app


Steps to start the App
```
1.npm intsall (it will install dependencies and devdependencies on your host
     1.a npm install --only=production to install dependencies.
```
```
2.npm run build (to build the main.js now u need to on express server)
3.npm runbuild-dev (it will build in webpack development mode and it has webdev server to work upon no need to start express server )
4.npm start (to start the express server when only npm run build and npm run build-prod)
5.npm run build-prod (it will build in production mode and u need to start express server)
```
 


