import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json('Page d\'accueil')
})

app.listen(5000, () => {
    console.log('Listening')
})

console.log('Running !')