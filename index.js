const Telebot = require("telebot");
const CONSTANTS = require("./constants");

const bot = new Telebot({
    token: CONSTANTS.TELEGRAM_TOKEN
});

bot.on(["/start", "/hola"], (msg) => {
    bot.sendMessatge(msg.chat.id, 'Hola ${msg.chat.username} bienvenido a tu primer bot')
})

bot.start();