import express from "express";
import cors from "cors";
import { UI } from "./ia.js";

const PORT = 3000;
const app = express();
app.use(cors());


app.get("/api/neon", async (req, res) => {
  if (!req.query.int) return res.status(404).json({ Erreur: "Intention vide" });
  console.log(`Intention recu : ${req.query.int}`);
  const intent = req.query.int;
  const d = await UI(intent);
  res.json({ code: d });
});

app.listen(PORT, () => console.log(`Serveur démarée sur le port : ${PORT}`));
