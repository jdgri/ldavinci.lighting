const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/about', function (req, res) {
    res.send('Edge DNS Rocks!')
})

app.get('/helloworld', function (req, res) {
    res.send('Edge DNS says hello!')
})

var port = 80;
app.listen(port);
console.log('Listening on port', port);
