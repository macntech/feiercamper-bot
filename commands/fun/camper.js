const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('feiercamp')
		.setDescription('Das mit dem Baum'),
	async execute(interaction) {
		await interaction.reply(':fire::camping:');
	},
};