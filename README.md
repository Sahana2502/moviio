# Moviio

A React app that uses the [OMDB](http://www.omdbapi.com/),[GraphQL](https://graphql.org/),and [Apollo Client](https://www.apollographql.com/docs/react/) to display movies/shows using a user entered search term .
The app is WCAG complaint: The contents can be accessed using only keyboard

## Screenshots

<p float="left">
  <img src="https://user-images.githubusercontent.com/89879294/149012819-ab7d6ff2-05bd-4dc5-8116-d3e2d727e127.png" width="1000" height="600"/> 
  &nbsp &nbsp &nbsp &nbsp
</p>


## Overview

The app does the following:
1. User enters a movie title(e.g. Harry Poter, Avengers) in the search box
2. Fetch 10 most recent movies' details asynchronously from [OMDB](http://www.omdbapi.com/)
3. Display the movie details with title including year of release and movie poster.
4. In case no response is returned, a message is displayed

## Generating API key 
* Go to http://www.omdbapi.com/apikey.aspx and generate your unique key to access the endpoint.

## Building the Moviio App
Make sure Node.js is installed on your machine
(The app was built using Visual Studio Code and tested on Ubuntu)
* First create an empty folde# moviior and clone the repo:`https://github.com/Sahana2502/movie-app/` by navigating to the directory.
* Open the project in VS Code using `code .`
* Open the terminal and type `npm install` to install all the mentioned dependencies in global `package.json` file
* Navigate to client folder as `cd client` and type `npm install` to install all the mentioned dependencied in `package.json` file for the client.
* Replace the key with the newly generated key in `schema.js` file in the call to the API
* To run the app `npm run dev`. This starts the server at PORT 5001 and the client PORT at 3000.
* Browse the app at `http://localhost:3000/`

### Libraries used

* [GraphQL](https://graphql.org/) - to create a GraphQL endpoint
* [Apollo Client](https://www.apollographql.com/docs/react/) - to query GraphQL API
* [Axios](https://www.npmjs.com/package/axios) - To query data from OMDB REST API
* [Material UI](https://www.npmjs.com/package/@material-ui/core) - For UI widgets
* [Node JS](https://nodejs.org/en/) - To build server for host GraphQL endpoint


