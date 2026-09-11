const express = require("express");

const app = express();
app.use(express.json());

let donations = [];

// Cek server
app.get("/", (req, res) => {
  res.send("JWORD STREET Donation Backend aktif!");
});

// Saweria mengirim donasi ke sini
app.post("/webhook", (req, res) => {
  console.log("DONASI MASUK:", req.body);

  const donation = {
    name: req.body.name || req.body.donor_name || "Anonymous",
    amount: req.body.amount || 0,
    message: req.body.message || "",
    time: new Date().toISOString()
  };

  donations.push(donation);

  // Simpan maksimal 20 donasi terakhir
  if (donations.length > 20) {
    donations.shift();
  }

  res.status(200).json({
    success: true,
    message: "Donation received"
  });
});

// Roblox mengambil daftar donasi
app.get("/donations", (req, res) => {
  res.json(donations);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
