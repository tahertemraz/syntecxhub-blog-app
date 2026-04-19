const express = require("express");
const router = express.Router();

const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

// upload image
router.post("/upload", protect, upload.single("image"), (req, res) => {
  res.status(200).json({
    message: "Image uploaded successfully",
    image: `/uploads/${req.file.filename}`,
  });
});

router.post("/", protect, createPost);
router.get("/", getPosts);
router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;