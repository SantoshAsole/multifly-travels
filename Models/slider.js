const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  serviceType: {
    type: String,
    enum: ["hotel", "cab", "flight"],
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
