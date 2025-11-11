require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const GithubError = {
  "message": "Not Found",
  "documentation_url": "www.google.com",
  "status": "404"
}

const fetch = {
  "welcome":"WELCOME TO THE DARK WEB!",
  "Age": "Mention your age...",
  "Caution": "YOU ARE AT YOUR OWN RISK"
}
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

app.get('/github', (req, res) => {
  res.json(GithubError)
})

app.get('/offers', (req, res) => {
  res.send("<h1>Hurry UP! </h1><br><h2>Special offer awaits</h2>")
})

app.get('/darkweb', (req, res) => {
  res.json(fetch)
})

//! JSON - Javascript Object Notation
//? SO (res.json) gives an object in the output.


