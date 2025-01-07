const moment = require("moment");
const { SlashCommandBuilder } = require("@discordjs/builders");
const dotenv = require("dotenv").config();

module.exports = {
    data: new SlashCommandBuilder()
    .setName('dm')
    .setDescription("Will DM all saved roles to each player."),
    async execute(interaction, options) {
        
    }
}