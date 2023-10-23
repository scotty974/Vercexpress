const express = require('express')
import data from './route/data.js'
const app = express()

const port = 3000

app.get('/api', data)

app.listen(port, ()=>{
    console.log(`server running at : ${port}`)
})