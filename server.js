const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(function(req, res, next){
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.use(express.static('./public'));
// app.get('/about', function(req, res){
//
// });

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

// app.get('/', (req, res) => res.send('Hello World'));
// app.get('/about', (req, res) => res.send('This is the about page'));
// app.get('/contact', (req, res) => res.send('This is the contact page'));
// app.get('/about/me', (req, res) => res.send('This is the about me page'));
// app.get('/about/us', (req, res) => res.send('This is the about us page'));
// app.post();

app.listen(port, () => console.log(`application is running on port ${port}`));
