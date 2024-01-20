const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const whatsappClient = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
  },
});

whatsappClient.on("qr", (pQr) => {
  qrcode.generate(pQr, { small: true });
});

module.exports = whatsappClient;
