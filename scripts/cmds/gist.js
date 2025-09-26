const a = require("fs").promises;
const b = require("axios");

const c = "https://nix-gist.vercel.app";

module.exports.config = {
 name: "gist",
 version: "1.0.0",
 credits: "ArYAN",
 hasPermission: 2,
 description: "Upload code to GitHub Gist",
 commandCategory: "convert",
 usages: "[fileName] or reply with code",
 cooldowns: 1
};

module.exports.run = async function ({ api, event, args }) {
 const d = args[0];
 if (!d) return api.sendMessage("❌ Missing file name.", event.threadID, event.messageID);

 let e = "";
 try {
 if (event.type === "message_reply" && event.messageReply?.body) {
 e = event.messageReply.body;
 } else {
 const f = `script/commands/${d}.js`;
 e = await a.readFile(f, "utf8");
 }
 } catch {
 return api.sendMessage("❌ File not found or cannot be read.", event.threadID, event.messageID);
 }

 try {
 const g = { code: encodeURIComponent(e), nam: `${d}.js` };
 const { data } = await b.post(`${c}/gist`, g);
 return api.sendMessage(data.data || "⚠️ API error.", event.threadID, event.messageID);
 } catch {
 return api.sendMessage("❌ Failed to upload to gist.", event.threadID, event.messageID);
 }
};
