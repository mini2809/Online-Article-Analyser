// import { analyseArticle } from '../server/analyse';
const analyseArticle = require('../server/analyse') 

// test('the data should be positive', async () => {
//     await expect(analyseArticle("u are very sweet")).resolves.toStrictEqual({polarity: 'positive', subjectivity:'subjective',text:'u are very sweet'});
// });

// test('the data should be negative', async () => {
//     await expect(analyseArticle("u are bad")).resolves.toStrictEqual({polarity: 'negative', subjectivity:'subjective',text:'u are bad'});
// });

// test('the data should be neutral', async () => {
//     await expect(analyseArticle("i am a girl")).resolves.toStrictEqual({polarity: 'neutral', subjectivity:'subjective',text:'i am a girl'});
// });

// test('the data should be neutral', async () => {
//     await expect(analyseArticle("123456")).resolves.toStrictEqual({polarity: 'neutral', subjectivity:'objective',text:'123456'});
// });
test('the data should be as expected', async () => {
	let val='https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f'
	await expect(analyseArticle({value:val})).resolves.toStrictEqual({ polarity: 'negative',
			subjectivity: 'subjective',
			text: "Using dotenv package to create environment  that rely on third-party sources for data will at some point need to include things like OAuth tokens, SSH keys, or API credentials. This becomes an issue when the code for the application gets pushed up to a public facing source control like GitHub. Once the code is up there it is accessible to anyone that sees it. And so are your keys.\nGitHub knows this is a problem and includes steps in their documentation to get around it.\nHow do you get around this?\nThere are tools being developed that search through repositories and find strings that could be sensitive information. This is a great idea but you would be relying on the code to find the strings.\nYou could add all of the files with sensitive information to your .gitignore file? You could, but then this would prevent all needed files from getting into source control. And anyone wanting to help write the code wouldn’t have a complete version.\nYou could fill in the files with dummy data and push them up. But then anytime you wanted to work on the real code you’d have to remember to swap out the dummy data with real data. Then remember to swap it back in when you push the code up. Kind of defeats the purpose of source control and quickly becomes a headache.\nOne solution for this is to use environment variables. These are local variables that are made available to an application. Creating these variables is made easy with a tool like dotenv. This module loads environment variables from a .env file that you create and adds them to the process.env object that is made available to the application.\nUsing dotenv\nIt’s pretty simple to use. First, install the package.\nnpm install dotenv --saveNext add the following line to your  create a .env file at the root directory of your application and add the variables to it.\n//contents of  add ‘.env’ to your ‘.gitignore’ file so that Git ignores it and it never ends up on GitHub. You can add any keys you want to this file.\nThat’s it. Four simple steps.\nNow, from within the app, any variables you’ve added to the file will be available. For example, if I add the above name/value to the .env file and console out the contents of process.env I should see this at the end of the object:\nTo take this a step further, I can display this information in a browser to confirm the app can read it.\nAfter creating a basic express server I can send the key to the ‘/’ route so that it gets rendered to the page.\nconst express = require(\'express\');\nconst app = express();\nconst port = process.env.PORT ||  (req, res) = {\n     () = {\n    console.log(`Server is running on port ${port}.`)\n})This code will look like this:\nDotenv is a simple way to allow you to create secret keys that your application needs to function and keep them from going public.\nThe code for this example can be found here."
		}
	);
});