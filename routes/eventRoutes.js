const express = require("express");
const { protect, isAdmin } = require("../middleware/authMiddleware.js");
const {
  addEvents,
  getEvents,
  updateEvents,
  deleteEvents,
} = require("../controllers/eventController.js");
const router = express.Router();
router.get("/", protect, getEvents);
router.post("/", protect, isAdmin, addEvents);
router.put("/:id", protect, isAdmin, updateEvents);
router.delete("/:id", protect, isAdmin, deleteEvents);
module.exports = router;
