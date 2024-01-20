const prismaClient = require("../config/database");
const env = require("../config/env");
const whatsappClient = require("../config/whatsapp");

const transmitChatService = async (pBody) => {
  const cRawDestinationNumber = pBody.noTujuan;
  const cDestinationNumber = `62${cRawDestinationNumber.substring(1)}@c.us`;
  const cCheckUser = await whatsappClient.isRegisteredUser(cDestinationNumber);
  const cIdChat = env.methods.generateId();
  const cMessage = pBody.message;

  // Status 0: Diterima
  await prismaClient.transmitChat.create({
    data: {
      id: cIdChat,
      destinationNumber: cRawDestinationNumber,
      message: cMessage,
    },
  });

  if (cCheckUser) {
    whatsappClient
      .sendMessage(cDestinationNumber, cMessage)
      .then(async () => {
        await prismaClient.transmitChat.update({
          where: {
            id: cIdChat,
          },
          data: {
            status: 1, // Berhasil terkirim
          },
        });
      })
      .catch(async () => {
        await prismaClient.transmitChat.update({
          where: {
            id: cIdChat,
          },
          data: {
            status: 2, // Gagal terkirim
          },
        });
      });
  } else {
    await prismaClient.transmitChat.update({
      where: {
        id: cIdChat,
      },
      data: {
        status: 3, // Gagal terkirim nomor tujuan tidak terdaftar di whatsapp
      },
    });
  }
};

module.exports = transmitChatService;
