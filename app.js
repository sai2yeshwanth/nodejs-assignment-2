const express = require('express');
const app = express()
//middleWare
// app.use((req, res, next) => {
//     console.log('first middleware')
//     next()
// })

// app.use((req, res, next) => {
//     console.log('second middleware')
//     res.send('<h1>Hello world!!!</h1>')
// })

app.use('/user', (req, res, next) => {
    const middleware = 'first middlware user for "/user"'
    console.log(middleware)
    res.send(`<h2>${middleware}</h2>`)
})

app.use('/', (req, res, next) => {
    const middleware = 'first middlware user for "/"'
    console.log(middleware)
    res.send(`<h2>${middleware}</h2>`)
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})