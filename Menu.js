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
            label: '👊방챔스 선수👊',
            description: '방챔스에서 당신의 실력을 보여주세요! 😊',
            value: 'first_option',
          },
          {
            label: '🤟방챔스 관객🤟',
            description: '방챔스에 오신것을 환영합니다! 😊',
            value: 'second_option',
          },
        ]),
    );

  await interaction.reply({ content: '역할을 선택해 주세요.', components: [row] });
}
};

