const express = require('express');
// const mongoose = require('mongoose');
// const routes = require('./routes');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Define API routes here
// app.use(routes);
// Send every other request to the React app
// mongoose.connect(
//   process.env.MONGODB_URI ||
//     'mongodb://heroku_bdq0hmmf:ufc9jh2h6453oc1qfa50i7ea5m@ds259347.mlab.com:59347/heroku_bdq0hmmf'
// );

// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
