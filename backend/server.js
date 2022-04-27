const { APPCENTER } = require('ci-info');
const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`server started on port ${process.env.PORT}`)
);
