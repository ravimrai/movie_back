const express = require('express');
const apiCallFromNode = require('./api');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api', (req,res) => {
  apiCallFromNode.callApi(function(response){
    var obj = JSON.parse(response);
    res.send(obj)
  });
})

app.listen(3000, () => {
  console.log('Hello');
})
