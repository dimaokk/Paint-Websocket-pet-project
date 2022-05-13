const express = require("express");
const app = express();
const expressWs = require("express-ws")(app);

const PORT = process.env.PORT || 3001;

app.ws("/", (ws, req) => {
  console.log("success ");
  ws.send('Wdporetion')
  ws.on("message", (msg) => {
      console.log(msg)
  });
});

app.listen(PORT, () => console.log(` server started on PORT ${PORT}`));
