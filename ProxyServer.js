import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 3000; // Replace with your desired port number

app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  const apiKey = "pat-eu1-00172cd5-732f-42bd-9ca3-c533f6bebcf1";
  const hubspotEndpoint = "https://api.hubapi.com/crm/v3/objects/contacts";

  const data = req.body; // Data sent from the client

  try {
    const response = await axios
      .post(hubspotEndpoint, data, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
