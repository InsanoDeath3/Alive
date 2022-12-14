const mongoose = require("mongoose");
const config = require("../config.json")

async function connect() {
  mongoose.connect(config.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }).then(() => {
    console.log("MongoDB Connected!!")
  }).catch((err) => console.log(`MongoDb Error: ${err}`))

  mongoose.connection.once("open", () => {
    console.log("Connected to Database");
  });
  return;
}

module.exports = connect();
