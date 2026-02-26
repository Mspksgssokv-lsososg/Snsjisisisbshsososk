// ================================
//   HACKER STYLE BOT STARTUP UI
// ================================

// Reset ANSI
const reset = "\x1b[0m";

// Color Palette
const colors = {
  cyan: "\x1b[38;5;51m",
  yellow: "\x1b[38;5;226m",
  matrixGray: "\x1b[38;5;240m",
  green: "\x1b[38;5;46m"
};

// Remove ANSI codes for width calculation
function stripAnsi(str) {
  return str.replace(/\x1B\[[0-9;]*m/g, '');
}

// Wrap content inside hacker-style ASCII box
function wrapInHackerBox(title, lines, color = colors.green) {
  const width = Math.max(
    stripAnsi(title).length,
    ...lines.map(line => stripAnsi(line).length)
  ) + 4;

  const border = color + "+" + "-".repeat(width) + "+" + reset;

  const titleLine =
    color + "| " +
    title.padEnd(width - 2) +
    " |" + reset;

  const contentLines = lines.map(line =>
    color + "| " +
    line.padEnd(width - 2) +
    " |" + reset
  );

  return [
    border,
    titleLine,
    border,
    ...contentLines,
    border
  ].join("\n");
}

// Get current time in Asia/Dhaka
function getDhakaTime() {
  return new Date().toLocaleString("en-US", {
    timeZone: "Asia/Dhaka"
  });
}

// ================================
// BOT INFORMATION
// ================================

const botInfo = [
  `${colors.cyan}BOT NAME     :${reset} GRAN BOT`,
  `${colors.cyan}OWNER        :${reset} GRAN OWNER`,
  `${colors.cyan}OWNER ID     :${reset} 880XXXXXXXXXX`,
  `${colors.cyan}PREFIX       :${reset} !`,
  `${colors.cyan}VERSION      :${reset} 1.0.0`,
  `${colors.cyan}STATUS       :${reset} ACTIVE`,
  `${colors.cyan}TIMEZONE     :${reset} Asia/Dhaka`,
  `${colors.cyan}LOCAL TIME   :${reset} ${getDhakaTime()}`,
  `${colors.cyan}MODE         :${reset} 24/7 VIP`,
  `${colors.cyan}SYSTEM       :${reset} ACTIVE`,
  `${colors.cyan}LOADED CMD   :${reset} 120`,
  `${colors.cyan}TELEGRAM     :${reset} https://t.me/yourusername`,
  `${colors.cyan}WHATSAPP     :${reset} https://wa.me/880XXXXXXXXXX`,
  `${colors.cyan}FACEBOOK     :${reset} https://fb.me/yourusername`
];

// ================================
// DISPLAY STARTUP SCREEN
// ================================

console.clear();

console.log(
  wrapInHackerBox(
    `${colors.yellow}BOT RUNNING SUCCESSFULLY${reset}`,
    botInfo,
    colors.matrixGray
  )
);

console.log(
  colors.green +
  "\n✔ SYSTEM ACTIVE\n" +
  reset
);