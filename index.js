const express = require('express');

const mongoConnection = require('./mongoConnection');

const app = express();
const PORT = 3000;



mongoConnection.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(console.error);
