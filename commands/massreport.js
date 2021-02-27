module.exports = {
    name: "report",
    description: "reportar bobinho",
    run: async (message, args) => {
        let msg;
        message.delete();
        let id = args[0]
        if (!id) {
            return message.channel.send("ID DA MENSAGEM SEU LIXO")
        }
        let motivo = args[1]
        if (!motivo) {
            return message.channel.send("ASSUNTO")
        }
        let desc = args[2]
        if (!desc) {
            return message.channel.send("DESC")
        }
        msg = await message.channel.send('✅ Sistema Iniciado!');
        setTimeout(() => {
            msg.edit("Tokens reportando: \`1/25\`");
            msg.edit("Tokens reportando: \`2/25\`");
            msg.edit("Tokens reportando: \`3/25\`");
            msg.edit("Tokens reportando: \`4/25\`");
            msg.edit("Tokens reportando: \`5/25\`");
            msg.edit("Tokens reportando: \`6/25\`");
            msg.edit("Tokens reportando: \`7/25\`");
            msg.edit("Tokens reportando: \`8/25\`");
            msg.edit("Tokens reportando: \`10/25\`");
            msg.edit("Tokens reportando: \`11/25\`");
            msg.edit("Tokens reportando: \`12/25\`");
            msg.edit("Tokens reportando: \`13/25\`");
            msg.edit("Tokens reportando: \`14/25\`");
            msg.edit("Tokens reportando: \`15/25\`");
            msg.edit("Tokens reportando: \`16/25\`");
            msg.edit("Tokens reportando: \`17/25\`");
            msg.edit("Tokens reportando: \`18/25\`");
            msg.edit("Tokens reportando: \`19/25\`");
            msg.edit("Tokens reportando: \`20/25\`");
            msg.edit("Tokens reportando: \`21/25\`");
            msg.edit("Tokens reportando: \`22/25\`");
            msg.edit("Tokens reportando: \`23/25\`");
            msg.edit("Tokens reportando: \`24/25\`");
            msg.edit("Tokens reportando: \`25/25\`");

            msg.edit(`✅ Reportado com sucesso! \nID Da mensagem:\` ${id}\` \nMotivo: \`${motivo}\` \nDesc: \` ${desc} \``)
          }, 1000);
     }
}