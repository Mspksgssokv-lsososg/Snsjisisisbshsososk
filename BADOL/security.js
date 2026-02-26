function checkSecurity(config, expectedOwnerId) {
    if (!config || config.ID !== expectedOwnerId) {
        console.clear();

        const banner = `
██████╗  █████╗ ██████╗  ██████╗ ██╗
██╔══██╗██╔══██╗██╔══██╗██╔═══██╗██║
██████╔╝███████║██║  ██║██║   ██║██║
██╔══██╗██╔══██║██║  ██║██║   ██║██║
██████╔╝██║  ██║██████╔╝╚██████╔╝███████╗
╚══════╝ ╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚══════╝
`;

        console.log("\x1b[31m"); // red
        console.log(banner);

        console.log("╔══════════════════════════════════════╗");
        console.log("║           SECURITY WARNING           ║");
        console.log("╠══════════════════════════════════════╣");
        console.log("║ STATUS  : DENIED                     ║");
        console.log("║ ACTION  : TERMINATING                ║");
        console.log("║ REASON  : OWNER ID MISMATCH          ║");
        console.log("╚══════════════════════════════════════╝");

        console.log("\nDeveloper: t.me/B4D9L\n");

        process.exit(1);
    }
}

module.exports = { checkSecurity };