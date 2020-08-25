require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const vision = require('@google-cloud/vision');


app.use(cors());

  async function quickstart(req, res) {
    // Imports the Google Cloud client library
    // const vision = require('@google-cloud/vision');
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY

      }
    });
  
    // Performs label detection on the image file
    const [result] = await client.documentTextDetection('https://i.pinimg.com/originals/2b/c4/4f/2bc44ff09685fd0c0dca65bc1b7e3011.jpg');
    const labels = result.fullTextAnnotation;
    console.log('Labels:');
    // console.log(labels);
    console.log(labels.text);
    // res.json(labels.text);
    // console.log(process.env.PRIVATE_KEY)
    // labels.pages.forEach(label => console.log(label.text));
  }


app.get('/', (req, res) => quickstart(req, res))

app.listen(5000, () => console.log('server running on 5000'));