const express = require('express');
const app = express();
const dbConfig = require("./configurations/databaseConfig");
const logger = require("morgan");
const { getForms, newForm } = require("./controller/formController");

// Middleware To Convert The Json Received to Object.
app.use(express.json());

// Calling Database Configuration Method To Connect Database.
dbConfig();

// Middleware To Log The Requests Received
app.use(logger('combined'))

app.route('/forms')
  .get(getForms)
  .post(newForm)

//Defining PORT at which server will start.
const PORT = 8000 || process.env.PORT;

//Starting The server on PORT
app.listen(PORT, () => console.log(`Server Started On PORT ${PORT}`));