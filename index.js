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
app.get("/translate/:lang/:text", async (request, response, next) => {
  try {
  response.send(await translate(request.params.text, { to: request.params.lang }))
  } catch (err) {
    response.send({"status": "error", "message": "Too many request"})
  }
});
