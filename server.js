const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const axios = require('axios');

const port = process.env.PORT;
app.listen(port,()=>{
    console.log('app listning on port number 3000')
})
// app.get('/api/data', async (req, res) => {
//     try {
//       const response = await axios.get('https://dummyjson.com/products');
//       res.json(response.data);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to fetch data from API' });
//     }
//   });
  
  app.get('/api/fackapi',async(req,res)=>{
    try{
        const response = await axios.get('https://dummyjson.com/products');
     
        res.send(response.data);
    }catch(error){
res.status(500).send({error:"the main erorr "})
    }
  })