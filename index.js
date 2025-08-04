const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Publikus statikus mappa beállítása
app.use(express.static(path.join(__dirname, "public")));

// Root útvonal válasza (opcionális)
app.get("/", (req, res) => {
  res.send("Üdv! A fájlok a /kepek/ útvonalon érhetők el.");
});

// Szerver indítása
app.listen(PORT, () => {
  console.log(`Fájlkiszolgáló fut: http://localhost:${PORT}`);
});
