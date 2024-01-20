const receiveChatService = require("../service/receiveChat");
const transmitChatService = require("../service/transmitChat");

const transmitChat = async (pReq, pRes) => {
  try {
    await transmitChatService(pReq.query);

    pRes.send(true);
  } catch (pErr) {
    pRes.send(false);
  }
};

const receiveChat = async (pReq, pRes) => {
  try {
    const cResult = await receiveChatService();

    pRes.send(cResult);
  } catch (pErr) {
    pRes.send(false);
  }
};

module.exports = { transmitChat, receiveChat };
