const TelegramApi = require('node-telegram-bot-api');
const token = '7843482084:AAHcMcm9JXyPPxDTjbnayTQB4LSlLVg8Rh4';
const webAppUrl = 'https://ya.ru';
const bot = new TelegramApi(token, {polling: true});
bot.on('message', msg => {
    const chatId = msg.chat.id;
    const text = msg.text;
    if (text === '/start') {
        bot.sendMessage(chatId, 'кнопочка сейчас появится', {
            reply_markup: {
                keyboard:[
                    [{text: 'кнопочка для перехода в приложение', web_app: {url: webAppUrl}}]
                ]
            }
        });
    }
});