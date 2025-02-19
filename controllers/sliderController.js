const Image = require("../models/slider");

const uploadImage = async (req, res) => {
  console.log(req.body);
  try {
    const newImage = new Image({
      url: req.file.path,
      active: true,
      serviceType: req.body.serviceType,
    });

    await newImage.save();
    res
      .status(201)
      .json({ message: "Image uploaded successfully", image: newImage });
  } catch (error) {
    res.status(500).json({ message: "Error uploading image", error });
  }
};

const getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: "Error fetching images", error });
  }
};

module.exports = {
  uploadImage,
  getImages,
};
