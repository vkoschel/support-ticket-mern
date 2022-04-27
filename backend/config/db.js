const mongoose = require('mongoose');

const connect = async () => {
  try {
    const cx = await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    console.log(`mongodb host: ${cx.connection.host}`);
  } catch (error) {
    console.log(`error: ${error.message} `);
    process.exit(1);
  }
};

module.exports = connect;
