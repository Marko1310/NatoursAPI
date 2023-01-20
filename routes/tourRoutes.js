const express = require("express");
const tourController = require("./../controllers/tourController");

// route handlers

const router = express.Router();
router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.changeTour)
  .delete(tourController.deleteTour);

module.exports = router;
