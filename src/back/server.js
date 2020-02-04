import path from "path";
import fs from "fs";

import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";

import App from "../front/App";

const PORT = 3006;
const app = express();
app.use(express.static(__dirname + "./server-build"));

app.get("/*", (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve("./server-build/index.html");

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error({ err, msg: "something went wrong" });
      return res.status(500).send({ msg: "Something went wrong" });
    }
    return res.send(
      data.replace(`<div id="root"></div>`, `<div id="root">${app}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log(`view here http://localhost:${PORT}`);
});
