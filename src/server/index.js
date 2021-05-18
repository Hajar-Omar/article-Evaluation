var FormData = require("form-data");
const request = require('request');
const fetch = require('node-fetch');
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);

// const textapi = new MeaningCloud({
//   application_key: process.env.API_KEY,
// });

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
})

app.get('/api/test', function(req,res){

    const formdata = new FormData();
    formdata.append("key", process.env.API_KEY);
    formdata.append("txt", "Hello I'm so happy");
    formdata.append("lang", "en"); // 2-letter code, like en es fr ...

    const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      request({
        method:'POST',
        body:formdata,
        redirect: "follow",
        url:"https://api.meaningcloud.com/sentiment-2.1"
      }, function (err, postRes, body) {
          console.log( body)
          res.send(postRes.toJSON())
        // if (err) {
        //   res.writeHead(500, { 'Content-Type': 'application/json' });
        //   var obj = {};
        //   obj['Status'] = 'something went wrong: ' + err;
        //   res.end( JSON.stringify( obj ) );
        // }
        // else {
        //     // res.send(`inside Book is added to the database${req.body}`);
        //   res.writeHead(200, { 'Content-Type': 'application/json' });
        //   var obj = {};
        //   obj['Status'] = postRes.statusCode;
        //   res.end( JSON.stringify( obj ) );
        // }
      })
    // res.send(`Book is added to the database ${req}`);

    // app.post(
    //     "https://api.meaningcloud.com/sentiment-2.1",
    //     requestOptions,
    //     function (req, res) {
    //       console.log(req,res);
    //     }
    //   );
})




app.get('/api/fetch', async function(req,res){
    const formdata = new FormData();
    formdata.append("key", process.env.API_KEY);
    formdata.append("txt", "Main dishes were quite good, but desserts were too sweet for me");
    formdata.append("lang", "en"); // 2-letter code, like en es fr ...

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
  .then(response =>  response)
//   .then(response => {
//     //   console.log( response);
//     //   res.send( response)
// })
  .catch(error => console.log('error', error));
  console.log(response)
  res.send(response)
})


// designates what port the app will listen to for incoming requests
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
