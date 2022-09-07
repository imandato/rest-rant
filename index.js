const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

// configuration
require('dotenv').config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const app = express();

// middleware
app.set('views', `${__dirname}/views`)
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Database
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})


// routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req,res) =>{
    res.render('error404')
})

app.listen(PORT)
