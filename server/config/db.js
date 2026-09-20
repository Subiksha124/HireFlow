const mongoose = require("mongoose");

async function connectDB() {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.error(
      "MongoDB connection failed: MONGODB_URI is not set. Add it to server/.env."
    );
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

mongoose.connection.on("error", (error) => {
  console.error("MongoDB error:", error.message);
});

module.exports = connectDB;
