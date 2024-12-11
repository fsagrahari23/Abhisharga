const mongoose = require("mongoose");

const connectDb = () => {
  const MONGO_URI = process.env.MONGO_URI;
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
};

module.exports = connectDb;