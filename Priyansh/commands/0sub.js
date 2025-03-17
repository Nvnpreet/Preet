const fs = require("fs");
module.exports.config = {
	name: "sub",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sub",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Julmi jaat")==0 || event.body.indexOf("जुल्मी ")==0 || event.body.indexOf("जुली")==0 || event.body.indexOf("Julmi")==0) {
		var msg = {
				body: "👋For Any Kind Of Help Contact On Instagram👇👇https://instagram.com/_julmi_jaat__?igshid=OGQ5ZDc2ODk2ZA==😇",
				fs.createReadStream(__dirname + )
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥳", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
