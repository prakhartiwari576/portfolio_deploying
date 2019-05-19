const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + '/public'));

app.set('view engine','hbs');

// app.use((req,res,next)=>{
//   var now = new Date().toString();
//   var log = `${now}: ${req.method} ${req.url}`;
//   console.log(log);
//   next();
// });

app.get('/',(req,res)=>{
  res.render('portfolio.hbs');
});

app.listen(port,()=>{
  console.log(`Server is on port ${port}`);
});
