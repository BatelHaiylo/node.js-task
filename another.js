const MyServer = require("./app")


class Another extends MyServer.MyServer{}

module.exports = new Another()