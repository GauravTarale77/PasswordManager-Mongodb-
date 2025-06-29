const express = require('express');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'PasswordManager';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

async function startServer() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection('password');

    // Get all passwords
    app.get('/', async (req, res) => {
      try {
        const passwords = await collection.find({}).toArray();
        res.json(passwords);
      } catch (error) {
        res.status(500).send(error.message);
      }
    });

    // Add or update password (upsert)
    app.post('/', async (req, res) => {
      try {
        const { id, site, username, password } = req.body;
        if (!site || !username || !password) {
          return res.status(400).send('site, username, and password are required');
        }

        // Upsert: update if id exists, else insert new
        await collection.updateOne(
          { id }, // filter by id
          { $set: { site, username, password } }, // update these fields
          { upsert: true } // insert if not found
        );

        res.send({ success: true });
      } catch (error) {
        res.status(500).send(error.message);
      }
    });

    // Delete password by id
    app.delete('/', async (req, res) => {
      try {
        const { id } = req.body;
        if (!id) {
          return res.status(400).send('id is required');
        }
        const result = await collection.deleteOne({ id });
        res.send({ success: result.deletedCount > 0 });
      } catch (error) {
        res.status(500).send(error.message);
      }
    });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

startServer();
