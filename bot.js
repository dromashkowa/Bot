var TelegramBot = require('node-telegram-bot-api');//загружаем нашь модуль 
var token = '227715071:AAFAkq_9FnWhmu3TChndL9YsLWEZUxE_eVM';//сюда надо вписать токен бота 
var bot = new TelegramBot(token, {polling: true});//создаём нового бота 

//функция on подписывает функцию которая передаётся в аргументе на определённое событие, ключ которого передаётся первым аргументом 
bot.on('message', function (msg) { 
//msg - это объект содержащий всебе сообщение и все данные о нём 
var userId = msg.from.id; 
var username = msg.from.first_name; 
//var vivod = username,userId;
console.log(msg);//вывод в консоль 
bot.sendMessage(userId, userId);//оправка сообщения
bot.sendMessage(userId, username); 
});