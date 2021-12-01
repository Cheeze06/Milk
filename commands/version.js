const { CommandInteraction } = require("discord.js");
module.exports = {
  name: "version",
  description: "개발중",
  /**
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
    await interaction.reply('Test Version');
  },
};