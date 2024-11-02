const mongoose = require("mongoose");
const { ATLAS_DB_URL, NODE_ENV } = require("./serverConfig");

async function connectToDb() {
  try {
    if (NODE_ENV === "development") {
      await mongoose.connect(ATLAS_DB_URL);
    }
  } catch (error) {
    console.log("Unable to connect to the DB server");
    console.error(error);
  }
}

module.exports = connectToDb;
