const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const travelsRouter = require('./routes/travels');

require('dotenv').config();

const app = express();
const portNumber = process.env.PORT || 5000;

app.use(express.json())
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,  {useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDb connection established successfully !');
})

app.use('/users', usersRouter);
app.use('/travels', travelsRouter);
app.listen(portNumber, () => {
	console.log(`server is running on port ${portNumber}`);
});
