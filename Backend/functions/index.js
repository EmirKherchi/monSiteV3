const functions = require('firebase-functions');
const admin = require('firebase-admin');

var serviceAccount = require("../privatekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://emk-website-9d4a3.firebaseio.com"
});

const express = require('express');
const app = express();
const db = admin.firestore();

const cors = require('cors');
app.use(cors({origin:true}));

//routes
app.get('/api', (req,res) => {
    return res.status(200).send('hello world'); 
})

//post
app.post('/api/create', (req,res) => {
    (async () =>{
        try {
            await db.collection('projets').doc('/' + req.body.id + '/')
            .create({
                name : req.body.name,
                imageUrl :req.body.imageUrl,
                description : req.body.description,
                link : req.body.link
            })

            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});
//read


//exports API to firebase cloud functions
exports.app = functions.https.onRequest(app);