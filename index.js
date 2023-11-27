import { translate } from '@vitalets/google-translate-api';
import express from 'express';
import cors from 'cors';
const app = express ();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;
//

//console.log(text)

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

//const text = await ;
app.post("/google/", async (request, response, next) => {
  try {
    //response.send(request.body)
  const trans = await translate(request.body.text, { to: request.body.target })
  response.send({"translation": trans.text, "error": null})
  } catch (err) {
    response.send({"error": "error", "message": "Too many request", "translation": "","origin": request.body.text, "to": request.body.target})
  }
});
