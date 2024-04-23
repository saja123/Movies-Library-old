'use strict';

const express = require("express");
const server = express();
const cors = require("cors");
 dataInfo = require("./Movie_Data/data.json");
 const PORT = 3000;
 server.use(cors());
 
 server.get("/", handleHomepage);
 server.get("/favorite", handleFavoritepage);
 server.use(handle404page);
 server.use(handle500page);

 function handleHomepage(req, res){
    let fawaz = new Movie(dataInfo.title, dataInfo.poster_path, dataInfo.overview);
    server.status(200).json(data);
 }

function  handleFavoritePage(req, res){
    server.status(200).send("Welcome to Favorite Page");
}

 function Movie(title, poster_path, overview){
    this.title = title;
    this.poster_path = poster_path;
    this.overview = overview;
 }

 function handle404page(req, res){
    server.status(404).send("Page not found error");
 }

 function handle500page(req, res){
    server.status(505).send({
        "status": 500,
        "responseText": "Sorry, something went wrong"
    })
 }

 server.listen(PORT, () => {
    console.log(`The server is up to listen in ${PORT}`);
 }) 





    

  
    




 
