import express from "express";

const cApp = express();
const cPort = 3001;
const cLimit = "50kb";

cApp.use(
  express.json({
    limit: cLimit,
  })
);

cApp.use(
  express.urlencoded({
    extended: true,
    limit: cLimit,
  })
);

cApp.use("/", (pReq, pRes) => {
  pRes.send("Hello from Genky Message Server!");
});

cApp.listen(cPort, () => {
  console.log(`Server run in port ${cPort}`);
});