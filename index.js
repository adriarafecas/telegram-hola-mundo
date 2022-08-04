const Telebot = require("telebot");
const CONSTANTS = require("./constants");

const bot = new Telebot({
    token: CONSTANTS.TELEGRAM_TOKEN
});

bot.on(["/start", "/hola"], (msg) => {
    console.log(msg);
    bot.sendMessage(msg.chat.id, `${msg.chat.first_name} el teu dispositiu ha detectat un virus`)
})

bot.start();
