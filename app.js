const express = require('express') // loads the express package
const app = express() // executes an express server 
const port = 3000 // defining our server port

app.use(express.static('public')); // configuration step which tells where my static files are located

app.get('/', (req, res) => { // defining my homepage route

res.sendFile(__dirname + '/views/jlohome-page.html')
})

aapp.get('/about', (request, response, next) => 
response.sendFile(__dirname + '/views/about.html'));

app.get('/works', (request, response, next) => 
response.sendFile(__dirname + '/views/works.html'));

app.get('/foto', (request, response, next) => 
response.sendFile(__dirname + '/views/foto.html'));



app.listen(port, () => { // allows incoming requests from clients
  console.log(`Example app listening on port ${port}`)
})