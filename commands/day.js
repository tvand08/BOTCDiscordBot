const moment = require("moment");
const { SlashCommandBuilder } = require("@discordjs/builders");
const dotenv = require("dotenv").config();

module.exports = {
    data: new SlashCommandBuilder()
    .setName('day')
    .setDescription("Saves the ordering and moves everyone to the Town Square."),
    async execute(interaction, options) {
        
    }
}