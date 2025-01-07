const moment = require("moment");
const { SlashCommandBuilder } = require("@discordjs/builders");
const dotenv = require("dotenv").config();

module.exports = {
    data: new SlashCommandBuilder()
    .setName('edit')
    .setDescription("Will edit the role of the specified number!"),
    async execute(interaction, options) {
        
    }
}