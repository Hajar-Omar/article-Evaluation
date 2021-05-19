# Article Evaluation via NLP [Natural Language Processing ](https://en.wikipedia.org/wiki/Natural_language_processing)

The project allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites using [Meaning Cloud](https://learn.meaningcloud.com)

![project image](https://i.ibb.co/W2PQmFg/nlp.png)

## Used Technologies

- [Webpack](https://webpack.js.org/) build tool
- [Express](http://expressjs.com/en/api.html) for web server
- [Sass](https://sass-lang.com/) styling pre-proccessing
- [Jest](https://jestjs.io) for testing
- [Workbox](https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack) for Offline Functionality

## Used APIs

- [Meaning Cloud](https://learn.meaningcloud.com) for NLP ( Natural Language Processing ) functionality
- `localhost:3000/` to get the index.html
- `localhost:3000/api/evaluate?url=URL_TO_PROCESS` to process a url sent as a params

## Get Started

1. install the node packages `npm install`
2. build the dist folder for production mode `npm run build-prod`
3. run the server `npm start`
4. run the dev environment `npm run build-dev`
5. open up the dev environment in `localhost:8080`
6. open up the production in `localhost:3000`
7. to run the test suites `npm run test`
