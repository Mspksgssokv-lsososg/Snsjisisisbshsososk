async function sendBootNotification(bot, botName, adminId) {
  const imageUrl = "https://lh3.googleusercontent.com/u/0/d/your-image-id";

  const now = new Date();

  const date = now.toLocaleDateString("en-GB");
  const time = now.toLocaleTimeString("en-US", {
    hour12: true,
    timeZone: "Asia/Dhaka",
  });

  const uptimeSeconds = process.uptime();
  const uptime = `${Math.floor(uptimeSeconds / 3600)}h ${Math.floor(
    (uptimeSeconds % 3600) / 60
  )}m ${Math.floor(uptimeSeconds % 60)}s`;

  const message = `
╔══════════════════════╗
        🚀 𝗕𝗢𝗧 𝗕𝗢𝗢𝗧 𝗣𝗔𝗡𝗘𝗟
╚══════════════════════╝

🤖 **Bot Name:** ${botName}
🆔 **Admin ID:** \`${adminId}\`

🌟 **System Status:** ONLINE & ACTIVE
🛡️ **Security:** Fully Protected
⚡ **Uptime:** ${uptime}

📅 **Date:** ${date}
⏰ **Time:** ${time} (Asia/Dhaka)

━━━━━━━━━━━━━━━━━━━━━━
✅ Bot successfully started  
🎯 Ready to receive commands  
━━━━━━━━━━━━━━━━━━━━━━
`;

  try {
    await bot.sendPhoto(adminId, imageUrl, {
      caption: message,
      parse_mode: "Markdown",
    });

    console.log(
      `\x1b[32m✅ [BOOT SUCCESS] Notification sent to Admin (${adminId})\x1b[0m`
    );
  } catch (photoError) {
    try {
      await bot.sendMessage(adminId, message, {
        parse_mode: "Markdown",
      });

      console.log(
        `\x1b[33m⚠️ [BOOT WARNING] Photo failed, text sent instead.\x1b[0m`
      );
    } catch (textError) {
      console.error(
        `\x1b[31m❌ [BOOT FAILED] Could not notify Admin: ${textError.message}\x1b[0m`
      );
    }
  }
}

module.exports = {
  sendBootNotification,
};