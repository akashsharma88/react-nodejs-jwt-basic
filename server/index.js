const { app } = require('./src/app')
const { config } = require('./src/config')


app.listen(config.port, () => {
    console.log(`Example app listening at http://localhost:${config.port}`)
})