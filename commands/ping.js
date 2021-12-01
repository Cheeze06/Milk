const { CommandInteraction } = require("discord.js");
module.exports = {
  name: "핑",
  description: "퐁!",
  /**
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
    await interaction.reply('퐁');
  },
};
