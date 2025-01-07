const moment = require("moment");
const { SlashCommandBuilder } = require("@discordjs/builders");
const dotenv = require("dotenv").config();

module.exports = {
    data: new SlashCommandBuilder()
    .setName('roles')
    .setDescription("Starts a call/response to save the role of every player in the Voice Channel."),
    async execute(interaction, options) {

    }
}