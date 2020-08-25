require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const vision = require('@google-cloud/vision');


app.use(cors());

  async function quickstart(req, res) {
    // Imports the Google Cloud client library
    // const vision = require('@google-cloud/vision');
    try {

      // Creates a client
      const client = new vision.ImageAnnotatorClient({
        credentials: {
          // client_email: process.env.CLIENT_EMAIL,
          // private_key: process.env.PRIVATE_KEY
          client_email:"redvanisation@pictocode.iam.gserviceaccount.com",
  
          private_key:"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC6DFTVLsCglT0J\n46L2ti+ThT1gj+s0Xw5h0w6YgILdlMOpxDb10JI26UrMEQ2HaY19c38HQo+8ZN12\nzgjZxIedxq0b3rxQOr/WWy7whcsb4GlhX1wuLEihW9oiusBMFCN4s56vb5Mkm1Es\nFt1RIcVVpALY0xwqWBTQi3GdusFmff9WBh46/XqRU9S/IU6h6MfsLfzOKCIP924U\nA7IPqCKiNwzd056iGklphG7QIlhmnQqFn6EnGy0k1GyboMZfQ710MuiXjd5Fsb2X\nvFn3MmVD6JYf41pFb//BKk1ex+zh5C9UZmHfIzZonFabz44iqM5cT2CEtuedZEmg\nva+9DxTdAgMBAAECggEAAZO0LmBokpPhQhGzYmr16UayV/ywTi/WE98xmvpP4afu\npqQ6oQfFDYEZuLQWTMUIxXzyoTGfvUWPmP+zFIF1ctFpyzgumXF+CceZFMHVkGVt\nDz27LssCTJfWOAAkPCDZkh7Xo/4Knb9RR1HkS1lBbnHm8kaL0RIRDxl3e5JHLGK2\nRkfbzgdkyv3BLRPCU40z4dXoAi8/oEH+d69hGkyBGqO/oI05YkM/Cho0iVC27ucU\nVM66imtUlMrR1J7yeak2QnQe2J+zbx4xN1ya3sk3taO9uViDaFH/X7k/s7zzfl7s\nZ9ATL9kOZMi4EPIj6GyTYOPyx2v8m7RapnTA13t28wKBgQD+5vastXHQeuJzwbn7\nusimhtq74UJDOyGfhafcNz00QaH2veK3HITrbxaoEB0cd8U3Ao1OD/B+VC0uj0ts\nvuu9pHiLVzPcjZWksMo+/GVVSnKdd3OUpuQJJCieFEoiYARnzoo6RHfGpiMWSYcK\nuW/0CDLmnvI0F2GfOK/PQqAzvwKBgQC62XRUT03+Pr65UcSwirZllVnG/V6zDE/T\nxfYWDSKfgZnNZzXUohiRqasBRKDitIpL2EzsBfHEphIaISyFW1xp9c2U5rIAa40U\nuslxq0O7eZlJ9Q7gp86yTmAxQW8q5/1gajfc+5DTmz/x5s+bzmKmf72xuECnrwsH\nH77vWOFuYwKBgQDuM3FSpeBs/Vi+6cteFQdKrvya0/7zCr/57ZGWtbwpKCgthvbl\nPO5tgItAlIZPwxD1vhnEWBraQtlSCDBot+Vee+L1+5CIS3sKwvbMc1pSoNaIlkbZ\nJDg23qZiSv2YL/gN9bGwj6kKZtilDCL4/59CAaNnZiNaUHs2qmeInG9OywKBgAtV\n9gDHbuvl0pxboZs0TyyKiw/Pf1dNf+pRMETWNyuGKVaU1Gc6DlOH/5/sEfavDVTc\noo4PLkPH74E2UgUlLc4f44ENHe94lu6TBnWm9k0Ba5NZErX+eEPJDXzvg1cPDAg1\naX42pOqxmIeMgTvqoYGIbnHBw+pobDraajMLKWIRAoGBAMUlT9cXe1MH4gkK+6qM\ndy6eDMiOrs1Hawag0/sZEjJPqWAE/JEp0evJVvJtYrC485e0ayETJbb+nWjf+aR6\n7ZyAoPD15D5JIvNzBzzIdR/i+TZk9tsJtOLq91zTUR4Kz+F3WDlwdOlgVYKXT2yc\nupbh8WtyfCr9bc58Cvjle+94\n-----END PRIVATE KEY-----\n"
        }
      });
    
      // Performs label detection on the image file
      const [result] = await client.documentTextDetection('https://i.pinimg.com/originals/2b/c4/4f/2bc44ff09685fd0c0dca65bc1b7e3011.jpg');
      const textObject = result.fullTextAnnotation;
      // console.log('Labels:');
      // console.log(labels);
      // console.log(labels.text);
      res.json(textObject);
      // console.log(process.env.PRIVATE_KEY)
      // labels.pages.forEach(label => console.log(label.text));
    } catch {
      res.send('Error handling the request!');
    }
  
  }


app.get('/', (req, res) => quickstart(req, res))

app.listen(process.env.PORT || 5000, () => console.log('server running on 5000'));