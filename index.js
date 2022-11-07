import express from "express";
import cors from "cors";

const app = express()
app.use(cors())
app.use(express.json())

const usuarios = []
const tweets = []

app.post('/sign-up', (req, res) => {
    const novoUsuario ={
        username : req.body.username,
        avatar : req.body.avatar,
    }

    usuarios.push(novoUsuario)
    res.send('OK')
})

app.post('/tweets', (req, res) => {
    const novoTweet = {
        username: req.body.username,
      tweet: req.body.tweet 
    }
    tweets.push(novoTweet)
    res.send(tweets)

}) 

app.get('/tweets', (req, res) => {
    tweets.forEach((tweet) => {
        const usuario = usuarios.find((user) => user.username === tweet.username)
        tweet.avatar = usuario.avatar
        
    })
   res.send(tweets.slice(-10))
})

app.listen(5000, () => console.log("ta rodando"))