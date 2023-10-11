import dotenv from 'dotenv'
import express from 'express'
import { Test } from './models/sequelize/test.js'

dotenv.config()

const PORT = process.env.APP_PORT || 8080

const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const data = await Test.findAll()
        return res.json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
})

app.post('/', async (req, res) => {
    const { pseudo } = req.body

    if (!pseudo || pseudo.trim().length < 2) return res.status(406).json('Manque des données')

    try {
        const data = await Test.create({ pseudo: pseudo.toLowerCase() })
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(400).json({ error: error })
    }
})

app.listen(PORT, () => {
    console.log('Listening on port :', PORT)
}) 
