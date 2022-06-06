const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.static('public'))
app.use(express.json())

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

app.post('/education/create', async (req, res) => {
    try {
        const { name, date } = req.body

        // CONECTAR AO BANCO DE DADOS
        const db = await open({
            filename: './database/resume.db',
            driver: sqlite3.Database,
        })

        await db.run(`INSERT INTO education (name, date) VALUES ('${name}', '${date}')`)

        await db.close()

        res.send()
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
})

app.patch('/education/:id', async (req, res) => {
    try {
        const { name, date } = req.body

        // CONECTAR AO BANCO DE DADOS
        const db = await open({
            filename: './database/resume.db',
            driver: sqlite3.Database,
        })

        await db.run(`UPDATE education SET name='${name}', date='${date}' WHERE id='${req.params.id}'`)

        await db.close()

        res.send()
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
})

app.delete('/education/:id', async (req, res) => {
    try {
        // CONECTAR AO BANCO DE DADOS
        const db = await open({
            filename: './database/resume.db',
            driver: sqlite3.Database,
        })

        await db.run(`DELETE FROM education WHERE id = '${req.params.id}'`)

        await db.close()

        res.send()
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
})

//add the app
app.listen(process.env.port || 3000)

console.log('Running at Port 3000')
