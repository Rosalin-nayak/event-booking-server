const express = require("express");
const { protect } = require("../middleware/authMiddleware.js");
const {
  getBookings,
  bookEvent,
  cancelBooking,
} = require("../controllers/bookingController.js");

const router = express.Router();

router.get("/my",protect,getBookings)
router.post("/:eventId", protect, bookEvent);
router.delete("/:eventId", protect, cancelBooking);

module.exports = router;
