import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../src/App";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("*", (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const indexFile = path.resolve("./build/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Une erreur est survenue:", err);
      return res.status(500).send("Erreur serveur");
    }

    return res.send(
      data.replace("<div id=\"root\"></div>", `<div id="root">${app}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log(`Serveur SSR démarré sur le port ${PORT}`);
});