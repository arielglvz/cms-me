const router = require("express").Router();
const {
  Intro,
  About,
  Project,
  Contact,
  Experience,
  Course,
} = require("../models/portfolioModel");

// get all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const courses = await Course.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects: projects,
      contact: contacts[0],
      experiences: experiences,
      courses: courses,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update intro
router.post("/update-intro", async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated successfully"
    });
  } catch (error) {
    console.error("Error updating intro:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the intro.",
      error: error.message
    });
  }
});

// update About
  router.post("/update-about", async (req, res) => {
    try {
      console.error("Request body:", req.body);
      const about = await About.findOneAndUpdate(
        { _id: req.body._id },
        req.body,
        { new: true }
      );
      res.status(200).send({
        data: about,
        success: true,
        message: "About updated successfully"
      });
    } catch (error) {
      console.error("Error updating about:", error);
      res.status(500).send({
        success: false,
        message: "An error occurred while updating the about.",
        error: error.message
      });
    }
  });

module.exports = router;
