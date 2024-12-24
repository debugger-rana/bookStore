const express = require('express')
const app = express()
const port =process.env.Port || 3000; 

//username => ranapsp317
//password => LDVhvjFyoJSynY1F

const mongoose = require('mongoose');
require('dotenv').config()


async function main() {
  await mongoose.connect(process.env.DB_URL);

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

}

main().then(()=> console.log("mongoodb conect is successfull")).catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})