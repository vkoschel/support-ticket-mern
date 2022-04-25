const { APPCENTER } = require('ci-info');
const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'teste victor api' });
});

app.use('/api/users', require('./routes/userRoutes'));

app.listen(process.env.PORT, () =>
  console.log(`server started on port ${process.env.PORT}`)
);
