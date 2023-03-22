const TelegramApi = require('node-telegram-bot-api');
const {gameOptions, againOptions} = require('./options'); 

const token = '5928781607:AAGuPSjim3sptsEfxCe2eJ06mNGiniFzgsA'; 
const bot = new TelegramApi(token, {polling: true}); 
const start = async () => { 
bot.setMyCommands([ 
{command: 'start', description: 'Описание команды'}
]); 
bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

    try {
if (text === '/start') { 
const cmd_start_opts = { 
        reply_markup: JSON.stringify({
          inline_keyboard: [[{text: '111', url: 'google.com'}], 
[{text: '222', callback_data: '/start'}], 
[{text: '333', callback_data: '/333'}], 
]
            }),
			parse_mode: 'html'
          };return bot.sendMessage(chatId, '<b><i>Текст</i></b>Текст',cmd_start_opts); 
    }return bot.sendMessage(chatId, 'Такой команды нет!');
        } catch (e) {
            return bot.sendMessage(chatId, 'Произошла какая то ошибка!'+ e);
        }

    }); 
bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;
if (data === '/start') { 
const cmd_start_opts = { 
        reply_markup: JSON.stringify({
          inline_keyboard: [[{text: '111', url: 'google.com'}], 
[{text: '222', callback_data: '/start'}], 
[{text: '333', callback_data: '/333'}], 
]
            })
          };return bot.sendMessage(chatId, 'Текст',cmd_start_opts); 
    }})} 
start()