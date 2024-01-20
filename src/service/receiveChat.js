const prismaClient = require("../config/database");

const receiveChatService = () => {
  return prismaClient.receiveChat.findMany({
    where: {
      status: 0,
    },
    select: {
      id: true,
      senderNumber: true,
      message: true,
      sendingTime: true,
    },
    orderBy: {
      sendingTime: "asc",
    },
  });
};

module.exports = receiveChatService;
