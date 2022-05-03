const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3456;

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {

  console.log("====== Webhook Received Start ===========");
  console.log("------ Headers ---------");
  console.log(req.headers);
  console.log("------ Body ------");
  console.log(req.body);
  console.log("====== Webhook Received End ===========");
  res.send("OK")
});

app.post('/webhook-failed', (req, res) => {
  res.status(400).send('Failed');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
