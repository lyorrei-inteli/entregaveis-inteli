const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.static('public'))

// DATABASE SETUP
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

app.use(
    cors({
        origin: '*',
    })
)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/education', async (req, res) => {
    try {
        // CONECTAR AO BANCO DE DADOS
        const db = await open({
            filename: './database/resume.db',
            driver: sqlite3.Database,
        })

        const education = await db.all(`SELECT * FROM education`)

        // FECHAR O BANCO DE DADOS
        await db.close()

        res.send(education)
    } catch (err) {
        res.status(400).send()
    }
})

//add the app
app.listen(process.env.port || 3000)

console.log('Running at Port 3000')
