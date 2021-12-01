const { CommandInteraction, MessageActionRow, MessageSelectMenu } = require("discord.js");
module.exports = {
  name: "메뉴",
  description: "test",
  /**
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
    if (!interaction.isCommand()) return;
    const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
        .setCustomId('방챔스 참가')
        .setPlaceholder('역할을 선택해 보세요.')
        .addOptions([
          {
            label: '첫번째 역할',
            description: '첫번째 역할',
            value: 'first_option',
          },
          
          {
            label: '두번째 역할',
            description: '두번째 역할',
            value: 'second_option',
          },
        ]),
    );
  await interaction.reply({ content: '역할을 선택해 주세요.', components: [row] });
}
};