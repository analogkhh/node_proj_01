const express = require('express')
const app = express()
const port = 5000

/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:admin123@test01.fxbod5x.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/brianDB')
.then(() => console.log('Mongodb Connrcted...'))
.catch(err => console.log(err))
;

/*
mongoose.connect('mongodb+srv://admin:admin123@test01.fxbod5x.mongodb.net/?retryWrites=true&w=majority' , {

}).then(() => console.log('Mongodb Connrcted...'))
  .catch(err => console.log(err))
*/
/*
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin123@test01.fxbod5x.mongodb.net/?retryWrites=true&w=majority'
    , {}).then(() => console.log('DB Connected...'))
  .catch(err => console.log(err))
;
*/
/*
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})