const express = require("express");

const app = express();
app.use(express.json());

let donations = [];

// Cek apakah backend aktif
app.get("/", (req, res) => {
  res.send("JWORd STREET Donation Backend aktif!");
});

// Roblox mengambil data donasi dari sini
app.get("/donations", (req, res) => {
  res.json(donations);
});

// Saweria mengirim donasi ke sini
app.post("/webhook", (req, res) => {
  console.log("DONASI MASUK:", req.body);

  donations.push(req.body);

  res.status(200).json({
    success: true,
    message: "Donation received"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
