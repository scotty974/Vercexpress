const express = require('express')

const app = express()

const port = 3000

app.get('/api', (req, res)=>{
    res.send('ca marche')
})

app.listen(port, ()=>{
    console.log(`server running at : ${port}`)
})