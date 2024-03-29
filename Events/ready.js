const Discord = require("discord.js")
const loadDatabase = require("../Loaders/loadDatabase")
const loadSlashCommands = require("../Loaders/loadSlashCommands")


module.exports = async bot => {

    bot.db = await loadDatabase()
    bot.db.connect(function () {
        console.log("Base de données connectée avec succès")
    })

    await loadSlashCommands(bot)

    console.log(`${bot.user.tag} est en ligne`)
}