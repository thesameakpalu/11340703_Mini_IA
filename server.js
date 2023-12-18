const express = require('express')
const App = express()

App.get('/', (req,res) => {
    res.send('University of Ghana Medical Center (UGMC)')
})


App.listen(3000, () => {
    console.log('running on local host')
})