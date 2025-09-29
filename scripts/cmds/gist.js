const fs = require("fs").promises;
const axios = require("axios");
const path = require("path");

const API_URL = "https://nix-gist.vercel.app";

module.exports = {
  config: {
    name: "gist",
    version: "1.1.0",
    credits: "ArYAN | Fixed by ChatGPT",
    permission: 2,
    description: "Upload code to GitHub Gist",
    category: "convert",
    usages: "[fileName] or reply with code",
    cooldowns: 1
  },

  onStart: async function ({ api, event, args }) {
    const fileName = args[0];
    if (!fileName) return api.sendMessage("❌ Missing file name.", event.threadID, event.messageID);

    let codeContent = "";

    try {
      
      if (event.type === "message_reply" && event.messageReply?.body) {
        codeContent = event.messageReply.body;
      } else {
        
        const possiblePaths = [
          path.join(__dirname, `${fileName}.js`),            // same folder
          path.join(__dirname, "..", `${fileName}.js`),      // parent folder
          path.join(__dirname, "..", "cmds", `${fileName}.js`), // cmds folder
          path.join(process.cwd(), "scripts", "cmds", `${fileName}.js`) // full project cmds
        ];

        let found = false;
        for (const p of possiblePaths) {
          try {
            codeContent = await fs.readFile(p, "utf8");
            found = true;
            break;
          } catch {}
        }

        if (!found) {
          return api.sendMessage("❌ File not found in common folders.", event.threadID, event.messageID);
        }
      }
    } catch {
      return api.sendMessage("❌ File not found or cannot be read.", event.threadID, event.messageID);
    }

    
    try {
      const payload = { code: encodeURIComponent(codeContent), nam: `${fileName}.js` };
      const { data } = await axios.post(`${API_URL}/gist`, payload);
      return api.sendMessage(data.data || "⚠ API error.", event.threadID, event.messageID);
    } catch {
      return api.sendMessage("❌ Failed to upload to gist.", event.threadID, event.messageID);
    }
  }
};
