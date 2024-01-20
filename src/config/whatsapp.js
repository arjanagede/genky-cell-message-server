const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const prismaClient = require("./database");
const env = require("./env");

const whatsappClient = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
  },
});

whatsappClient.on("qr", (pQr) => {
  qrcode.generate(pQr, { small: true });
});

whatsappClient.on("authenticated", () => {
  console.log("user sudah terautentikasi");
});

whatsappClient.on("ready", () => {
  console.log("whatsapp siap");
});

whatsappClient.on("message", async (pMessage) => {
  if (!pMessage.author) {
    const cIdChat = env.methods.generateId();

    let vSenderPhoneNumber = pMessage.from;
    let vEndPhoneNumber = vSenderPhoneNumber.indexOf("@");
    vSenderPhoneNumber = `0${vSenderPhoneNumber.substring(2, vEndPhoneNumber)}`;

    await prismaClient.receiveChat.create({
      data: {
        id: cIdChat,
        senderNumber: vSenderPhoneNumber,
        message: pMessage.body,
        sendingTime: `${pMessage.timestamp}`,
      },
    });
  }
});

module.exports = whatsappClient;
