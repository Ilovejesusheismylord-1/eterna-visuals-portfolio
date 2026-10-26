const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;
const messagesFile = path.join(__dirname, "messages.json");

app.use(express.json({ limit: "30kb" }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/contact", (req, res) => {
  const { name, email, service, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Please provide your name, email and message." });
  }
  const entry = {
    name: String(name).slice(0, 120),
    email: String(email).slice(0, 180),
    service: String(service || "Not specified").slice(0, 120),
    message: String(message).slice(0, 3000),
    receivedAt: new Date().toISOString()
  };
  let messages = [];
  try {
    if (fs.existsSync(messagesFile)) messages = JSON.parse(fs.readFileSync(messagesFile, "utf8"));
  } catch (e) {
    console.error("Could not read messages file.");
  }
  messages.push(entry);
  fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
  res.json({ ok: true, message: "Thanks for reaching out. Your enquiry has been received." });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log(`Eterna Visuals is running on http://localhost:${PORT}`));
