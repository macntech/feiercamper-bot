const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bier')
		.setDescription('Her damit!'),
	async execute(interaction) {
		await interaction.reply('🍺');
	},
};