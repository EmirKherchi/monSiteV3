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

            return res.status(200).send("projet ajouté à la BDD");
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});


//read a spécifique projet en utilisant l'Id

//Get
app.get('/api/read/:id', (req,res) => {
    (async () =>{
        try {
            
            const document = db.collection('projets').doc(req.params.id);
            let projet = await document.get();
            let response = projet.data();

            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});


//exports API to firebase cloud functions
exports.app = functions.https.onRequest(app);