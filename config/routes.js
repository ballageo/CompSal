const path = require('path')
const controller = require('./controller')
module.exports = (app) => {
    app.get('/api/PLACEHOLDER', controller.PLACEHOLDER)
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}