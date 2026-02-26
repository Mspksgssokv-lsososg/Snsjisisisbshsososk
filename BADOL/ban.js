const axios = require("axios");

const BANNED_URL =
  "https://raw.githubusercontent.com/mohammadbadol/dopop/ds/main/BannedUser.json";

async function checkBan(userId) {
  try {
    const response = await axios.get(`${BANNED_URL}?t=${Date.now()}`);
    const bannedUsers = response.data;

    if (Array.isArray(bannedUsers)) {
      return bannedUsers.includes(userId.toString());
    }

    return false;
  } catch (error) {
    console.error("🚨 [Guard Error] Failed to load ban list:", error.message);
    return false;
  }
}

async function handleBanCheck(bot, msg, shouldCheck, commandName) {
  if (!shouldCheck) return false;

  const userId = msg.from.id;
  const firstName = msg.from.first_name;

  const isBanned = await checkBan(userId);

  if (isBanned) {
    console.log(
      `🚫 [Banned User Alert] ${firstName} (${userId}) tried command: ${commandName}`
    );

    await bot.sendMessage(
      msg.chat.id,
      `❌ দুঃখিত ${firstName}, আপনাকে বট থেকে ব্যান করা হয়েছে। আপনি কোনো কমান্ড ব্যবহার করতে পারবেন না।`,
      {
        reply_to_message_id: msg.message_id,
      }
    );

    return true; 
  }

  return false;
}

module.exports = {
  handleBanCheck,
};