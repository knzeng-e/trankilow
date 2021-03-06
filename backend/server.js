const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const usersRoutes = require('./routes/users-routes');
const travelsRoutes = require('./routes/travels-routes');

require('dotenv').config();

const app = express();
const portNumber = process.env.PORT || 5000;

app.use(express.json())
app.use(cors());

const options = {}; //update connexion
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,  {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  });

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDb connection established successfully !');
})

app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/travels', travelsRoutes);
app.listen(portNumber, () => {
	console.log(`server is running on port ${portNumber}`);
});
