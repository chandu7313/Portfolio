const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const messagesFile = path.join(__dirname, 'messages.json');

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Initialize messages file if it doesn't exist
if (!fs.existsSync(messagesFile)) {
  fs.writeFileSync(messagesFile, JSON.stringify([]));
}

// Rate Limiting
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 contact requests per windowMs
  message: { error: "Too many requests, please try again later." }
});

// API Routes
app.post('/api/contact', contactLimiter, (req, res) => {
  const { name, email, message } = req.body;

  // Basic Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields: name, email, message." });
  }

  const newMessage = {
    id: Date.now().toString(),
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  };

  try {
    const rawData = fs.readFileSync(messagesFile);
    const messages = JSON.parse(rawData);
    messages.push(newMessage);
    fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));

    // Simulated network delay for animation purpose
    setTimeout(() => {
      res.status(200).json({
        success: true,
        data: {
          packetId: newMessage.id,
          status: "DELIVERED",
          message: "Request packet received successfully."
        }
      });
    }, 1500);

  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
