const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("JWORd STREET Donation Backend aktif!");
});

app.post("/webhook", (req, res) => {
  console.log("DONASI MASUK:", req.body);

  res.status(200).json({
    success: true,
    message: "Donation received"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
