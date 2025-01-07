const moment = require("moment");
const { SlashCommandBuilder } = require("@discordjs/builders");
const dotenv = require("dotenv").config();

module.exports = {
    data: new SlashCommandBuilder()
    .setName('save')
    .setDescription("Saves the ordering of people in night rooms without moving them."),
    async execute(interaction, options) {
        
    }
}