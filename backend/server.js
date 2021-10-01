// Require necessary NPM modules:
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const cors = require("cors");
const path = require('path');

// Configure App:
const app = express();
const port = process.env.PORT || 5000;

// Set Middlewares:
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend', 'build')));



// Connect to a new MongoDB Database, using Mongoose ODM:
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.m5s9h.mongodb.net/tinderDB?retryWrites=true&w=majority`);

mongoose.connection.once('open', () => {
  console.log(`Server is connected to Mongo Atlas Database`);
})

// Create a new collection to store the cards:
const cardSchema = new mongoose.Schema ({
	name: String,
	imgUrl: String
},{
  timestamps: true
})

const Card = mongoose.model('Card', cardSchema);



// Set API endpoints:

// Handle 'GET' requests made on the '/' route:
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
});

// Handle 'GET' requests made on the '/api/cards' route to get all the cards:
app.get('/api/cards', (req, res) => {
  Card.find({}, (err, cards) => {
    if(!err) {
      res.status(200).json(cards);
    } else {
      res.status(500).json({"error": err});
    }
  })
})

// Handle 'POST' requests made on the '/api/card/add' route to add a card:
app.post('/api/card/add', (req, res) => {
  const card = new Card(req.body);
  card.save(err => {
    if(!err) {
      res.status(201);
    } else {
      res.status(500).json({"error": err});
    }
  })
})

// Handle 'DELETE' requests made on the '/api/card/delete' route to delete a particular card:
app.delete('/api/card/delete', (req, res) => {
  const id = req.body.objId;
  Card.findByIdAndRemove(id, err => {
    if(!err) {
      res.status(200).json(`Deleted card with id: ${id} !`);
    } else {
      res.status(500).json({"error": err});
    }
  })
})



// Set listener:
app.listen(port, () => {
  console.log(`Server started running on port ${port}`);
})