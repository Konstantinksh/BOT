const TelegramBot = require('node-telegram-bot-api');

// Replace YOUR_TOKEN_HERE with your bot token
const bot = new TelegramBot('YOUR_TOKEN_HERE', { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Send a response message
  bot.sendMessage(chatId, `You said: ${messageText}`);
});