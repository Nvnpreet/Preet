const fs = require("fs");
module.exports.config = {
	name: "pepsi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "pepsi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("pepsi")==0 || event.body.indexOf("Pepsi")==0 || event.body.indexOf("PEPSI")==0 || event.body.indexOf("Coldaring")==0) {
		var msg = {
				body: "❤️𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐏𝐄𝐏𝐒𝐈 𝐏𝐈 𝐋𝐎🙈\n\n(─━━◉❖𝗝𝗨𝗟𝗠𝗜≛𝗝𝗔𝗔𝗧❖◉━━─)",
				attachment: fs.createReadStream(__dirname + `/cache/pepsi.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
