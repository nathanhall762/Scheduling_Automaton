const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder, ComponentType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('voting')
        .setDescription('Multi-select for voting!'),
    async execute(interaction) {
        const select = new StringSelectMenuBuilder()
            .setCustomId('starter')
            .setPlaceholder('Make a selection!')
            .setMinValues(1)
            .setMaxValues(3)
            .addOptions(
                new StringSelectMenuOptionBuilder()
                    .setLabel('Monday')
                    .setValue('1'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Tuesday')
                    .setValue('2'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Wednesday')
                    .setValue('3'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Thursday')
                    .setValue('4'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Friday')
                    .setValue('5'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Saturday')
                    .setValue('6'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Sunday')
                    .setValue('7'),
            );

        const row = new ActionRowBuilder()
            .addComponents(select);

        // const response = await interaction.reply({
        //     content: `@everyone Citizens of Baldur's Gate! It is time to return to fighting and fucking your way through Faerun as a team of stalwart adventurers! It is imperative to the security of our city that you select all days you will be available for adventuring from the dropdown below:`,
        //     components: [row],
        //     withResponse: true,
        // });

        const response = await interaction.reply({ content: `@everyone Citizens of Baldur's Gate! It is time to return to fighting and fucking your way through Faerun as a team of stalwart adventurers! It is imperative to the security of our city that you select all days you will be available for adventuring from the options below:`, withResponse: true });
        const { message } = response.resource;
		message.react('Ⓜ️');
		message.react('2️⃣');
		message.react('💨');
        message.react('🍺');
		message.react('🍟');
		message.react('🪐');
        message.react('🌞');

        // const collector = response.resource.message.createMessageComponentCollector({ componentType: ComponentType.StringSelect, time: 3_600_000 });

        // collector.on('collect', async i => {
        //     const selection = i.values;
        //     await i.reply(`${i.user} has selected ${selection}!`);
        // });
    },
};