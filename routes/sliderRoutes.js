const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const { uploadImage, getImages } = require("../controllers/sliderController");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

// Ensure 'uploads/' directory exists
const uploadDir = "uploads/";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// File Type Validation
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Only images (jpeg, jpg, png) are allowed"), false);
  }
};

// Multer Upload Middleware
const upload = multer({
  storage,
  limits: { fileSize: 25 * 1024 * 1024 }, // 5MB limit
  fileFilter,
});

// Routes
router.post(
  "/upload",
  verifyToken,
  (req, res, next) => {
    upload.single("image")(req, res, (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      next();
    });
  },
  uploadImage
);

router.get("/images", verifyToken, getImages);

module.exports = router;
