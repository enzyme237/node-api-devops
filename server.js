'use strict';

const express = require('express');

const healthRoutes = require('./routes/health');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Express');
});

app.use(healthRoutes);


// middleware d'erreur
app.use((err, req, res, next) => {

  console.error(err);

  res.status(500).json({ error: 'Internal Server Error' });
});


app.listen(PORT, () => {

  console.log(`Server running on http://localhost:${PORT}`);

});







