var TelegramBot = require('node-telegram-bot-api');//��������� ���� ������ 
var token = '227715071:AAFAkq_9FnWhmu3TChndL9YsLWEZUxE_eVM';//���� ���� ������� ����� ���� 
var bot = new TelegramBot(token, {polling: true});//������ ������ ���� 

//������� on ����������� ������� ������� ��������� � ��������� �� ����������� �������, ���� �������� ��������� ������ ���������� 
bot.on('message', function (msg) { 
//msg - ��� ������ ���������� ����� ��������� � ��� ������ � �� 
var userId = msg.from.id; 
var username = msg.from.first_name; 
//var vivod = username,userId;
console.log(msg);//����� � ������� 
bot.sendMessage(userId, userId);//������� ���������
bot.sendMessage(userId, username); 
});