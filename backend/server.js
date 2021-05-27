const express = require('express')

const app = express()

app.get('/', (req,res)=>{
    res.send('API running...')
})

app.listen(8040, console.log('server running on port 8040'))