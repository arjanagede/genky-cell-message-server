const transmitChatService = require("../service/transmitChat");

const transmitChat = async (pReq, pRes) => {
  try {
    await transmitChatService(pReq.query);

    pRes.send(true);
  } catch (pErr) {
    pRes.send(false);
  }
};

module.exports = { transmitChat };
