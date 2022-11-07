const express = require('express') // loads the express package
const app = express() // executes an express server 
const port = 3000 // defining our server port




app.use(express.static('public'));

app.set(`views`, `views`);
app.set(`view engine`, `hbs`);
//

app.get('/', (req, res) => { // defining my homepage route

res.sendFile(__dirname + '/views/jlohome-page.html')
})

//app.get('/about', (request, response, next) => {
 // response.sendFile(__dirname + '/views/about')

//});

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html')
});

app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html')
});

app.get('/photo', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo.html')
});



app.listen(port, () => { // allows incoming requests from clients
  console.log(`Example app listening on port ${port}`)
})