const express = require('express')
const app = express()

const hostname = '127.0.0.1'   // set constants
const port = 3002

app.get('/', function (req, res) {
  res.render('index.html')
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/hey',  (req, res) =>{
  res.send('<h1>hello everyone!How are you doing?</h1>')
})

app.get('/greeting/:id',  (req, res) =>{
  res.send('Hello! The id was ' + req.params.id)

})
app.get('/d',  (req, res) =>{
  res.send('Hello! The id was '.link("https://media1.tenor.com/images/d62281d142846278c307598c4a9f0da3/tenor.gif?itemid=7427051"))

})


app.get('/yo/:buddy',  (req, res) =>{
  res.send('<h1>Yo, ' + req.params.buddy + '!</h1>')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

