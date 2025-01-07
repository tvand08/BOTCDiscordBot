const moment = require("moment");
const { SlashCommandBuilder } = require("@discordjs/builders");
const dotenv = require("dotenv").config();

module.exports = {
    data: new SlashCommandBuilder()
    .setName('night')
    .setDescription("Moves everyone but the storyteller to a night room."),
    async execute(interaction, options) {
        
    }
}