const express = require('express')
const bodyParser = require ("body-parser")
const app = express();
const PORT = 600;
const router = require(`./routes/users.js`);   

app.use(bodyParser.json());

app.use(`/users`, router);


  
app.listen(PORT, () => console.log (`server is live on port: ${PORT}`))