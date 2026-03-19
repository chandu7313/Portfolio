// Vercel Serverless Function for Contact Form
// Note: Filesystem is read-only in production. 
// Messages will be logged to the console for now.
// For persistence, connect a database like MongoDB Atlas.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Basic Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields: name, email, subject, message." });
  }

  console.log(`New Message from ${name} (${email}): [${subject}] ${message}`);

  // Simulated network delay for animation purpose
  await new Promise(resolve => setTimeout(resolve, 1000));

  return res.status(200).json({
    success: true,
    data: {
      packetId: Date.now().toString(),
      status: "DELIVERED",
      message: "Request packet received successfully."
    }
  });
}
