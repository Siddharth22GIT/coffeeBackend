require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
console.log("Coffee and Backend")
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/x', (req,res)=>{
res.send('<h1>Welcome to X by Elon Musk!</h1>')
})

app.get('/youtube', (req, res) => {
  res.send("<h2>Coffee and Backend!</h2>")
})


app.get('/terms', (req, res) => {
  res.send("<h2>Mutual funds are subject to market risks!</h2>")
})


