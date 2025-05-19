const { Telegraf } = require("telegraf");
const TOKEN = "7624280607:AAEF-Z1IaBQHXPifJ8TDnIrjUW5uH4zwdwI";
const bot = new Telegraf(TOKEN);

const web_link = "https://b5da-196-189-144-197.ngrok-free.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
