import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import EmailSender from "./SendEmail.js";

dotenv.config();
const app = express();
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
const port = process.env.PORT || 5000;
app.use(express.json());

// ****** SEND API
app.post("/send", async (req, res) => {
  try {
    const { fullName,email,phone,message} = req.body
    EmailSender({fullName,email,phone,message})
    res.json({ msg: "Your message sent successfully" });
  } catch (error) {
    res.status(404).json({ msg: "Error ❌" });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
