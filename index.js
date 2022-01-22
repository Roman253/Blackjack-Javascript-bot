process.env["NTBA_FIX_319"] = 1;

import TelegramBot from 'node-telegram-bot-api'
require('dotenv').config()

const TOKEN = process.env.token
const bot = new TelegramBot(TOKEN, { polling: true})

bot.on('message', msg =>{
    const {chat:{ id}} = msg
    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id, "Hello dear user");};
    bot.sendMessage(id, app())
})

function app(){
    let dealerHAnd=Math.floor(Math.random() * (21 - 17) + 17);
    let playerHand=Math.floor(Math.random() * (21 - 17) + 17);
    if (playerHand > dealerHAnd) {return 'PlayerHand ' + playerHand + ' DealerHAnd ' + dealerHAnd +" "+ " you Won" +" "+ "another game?";}
    else if (playerHand = dealerHAnd) {return 'PlayerHand ' + playerHand + ' DealerHand ' + dealerHAnd + " "+ "A tie" +" "+ "another game?";}
    else {return ' PlayerHand ' + playerHand + ' DealerHand ' + dealerHAnd +" "+ ' you lost'+ " "+"another game?";}
}


function randomCard () {
    let deck = 12;
    return Math.floor(Math.random() * (deck - 1)) + 1;
};

/*
bot.on('message', (msg) => {
var Hi = "hi";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id, "Hello dear user");
}
var bye = "bye";
if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
}
var robot = "I'm robot";
if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
}
});
*/
/*
bot.onText(/\/help (.+)/, (msg, [source, match]) => {
    const { chat: { id }} = msg
    bot.sendMessage(id, match)
})
*/