const TelegramApi = require('node-telegram-bot-api')
const {gameOptions, againOptions} = require('./options')
const token = '1876023471:AAFril52MTP8nwlJzNK94OHt5RDIldAibIk'

const bot = new TelegramApi(token, {polling: true})

const chats = {

}

const startGame = async (chatId) => {
    await bot.sendMessage(chatId, `Ну че время ♂️️stick finger♂️️, щас в угадайку будем играть! Я загадываю число от 0 до 9, а ты думай.`)
        const randomNumber = Math.floor(Math.random() * 10)
        chats[chatId] = randomNumber;
        await bot.sendMessage(chatId, 'Ну че отвечай ♂️️boy♂️', gameOptions)
}

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Давай знакомиться ♂️️boy♂️️'},
        {command: '/name', description: 'Представься ♂️️WeWe♂️️'},
        {command: '/game', description: 'Играть в ♂️️stick finger♂️'},
    ])
    
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
        if (text === '/start'){
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/06d/991/06d991f7-564f-47cd-8180-585cd0056a42/5.webp')
            return bot.sendMessage(chatId, `Ну здарова ебло утиное!!!`)
        }
        if (text === '/name'){
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/0b7/22f/0b722fbb-9ce6-365b-9e01-91161b7e391c/3.webp')
            return bot.sendMessage(chatId, `Ну я так понял параша ты ебаная, тебя зовут ${msg.from.first_name}`)
        }
        if (text === '/game'){
            return startGame(chatId);
        }
        return bot.sendMessage(chatId, 'Ты че такое, базаришь?!')
    })

    bot.on('callback_query', async msg =>{
        const data = msg.data;
        const chatId = msg.message.chat.id;
        if(data === '/again'){
            return startGame(chatId);
        }
        console.log(chats[chatId]+' and '+data)
        if(data == chats[chatId]){
            return await bot.sendMessage(chatId, `А ты хорош угадал, это: ${chats[chatId]}, скоро ♂️️master♂️️ станешь!`, againOptions)
        } else {
            return  bot.sendMessage(chatId, `Ебать ты чмо, подставляй жопу, я загадал это: ${chats[chatId]}`, againOptions)
        }
    })
}

start()