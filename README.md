# Online Article Analyser

A webApp to evaluate any news article using Natural Language Processing. It uses a third party API "AYLIEN API" which is a text Analysis API, inputs a article/sentence and give as its Polarity ,Subjectivity and other parameters.    

[Live preview](https://blooming-journey-93982.herokuapp.com/)

## It was built using
- Webpack: To bundle Assets and for increasing Performance.Webpack provides plugins and loaders to ease the task.
- SASS: Css preprocessor to make css styles handy and maintainable.
- Service worker: For caching and providing offline content.
- Jest: for manual testing purpose and created my own test cases to test the app


## Steps to start the App
1. To install dependencies and devdependencies on your host
     1.a For development:
     ```
     npm install
     ```
     1.b For production:
     ```
     npm install --only=production
     ```

2. To build the project, which will compile all the files and put everything in build.js then you need to start express server
     2.a For simple build:
     ```
     npm run build
     ```
     2.b For webpack development build (it has webdev server to work upon no need to start express server)
     ```
     npm run build-dev
     ```
     2.c For production build 
     ```
     npm run build-prod
     ```
4. To start the express server when only npm run build and npm run build-prod
```
npm start
```

 


