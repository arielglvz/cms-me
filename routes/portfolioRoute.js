const router = require("express").Router();
const {
  Intro,
  About,
  Project,
  Contact,
  Experience,
  Course,
} = require("../models/portfolioModel");

const User = require("../models/userModel");

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
      message: "Intro updated successfully",
    });
  } catch (error) {
    console.error("Error updating intro:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the intro.",
      error: error.message,
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
      message: "About updated successfully",
    });
  } catch (error) {
    console.error("Error updating about:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the about.",
      error: error.message,
    });
  }
});

// Update Experience
router.post("/update-experience", async (req, res) => {
  try {
    console.error("Request body:", req.body);
    const experience = await Experience.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience updated successfully",
    });
  } catch (error) {
    console.error("Error updating experience:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the experience.",
      error: error.message,
    });
  }
});

// Add Experience
router.post("/add-experience", async (req, res) => {
  try {
    console.error("Request body:", req.body);
    const experience = new Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience added successfully",
    });
  } catch (error) {
    console.error("Error adding experience:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while adding the experience.",
      error: error.message, 
    });
  }
});

// Delete Experience
router.post("/delete-experience", async (req, res) => {
  try {
    console.error("Request body", req.body);
    const experience = await Experience.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience deleted successfully"
    })

  } catch (error) {
    res.status(500).send({
      success: false,
      message: "An error occurred while deleting the experience.",
      error: error.message,
    });
  }
});

// Add Project
router.post("/add-project", async (req, res) => {
  try {
    console.error("Request body:", req.body);
    const project = new Project(req.body);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "Project added successfully",
    });
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while adding the project.",
      error: error.message, 
    });
  }
});

// Update Project
router.post("/update-project", async (req, res) => {
  try {
    console.error("Request body:", req.body);
    const project = await Project.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "Project updated successfully",
    });
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the project.",
      error: error.message,
    });
  }
});

// Delete Project
router.post("/delete-projects", async (req, res) => {
  try {
    console.error("Request body", req.body);
    const projects = await Project.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: projects,
      success: true,
      message: "Project deleted successfully"
    })

  } catch (error) {
    res.status(500).send({
      success: false,
      message: "An error occurred while deleting the project.",
      error: error.message,
    });
  }
});

// Add Course
router.post("/add-course", async (req, res) => {
  try {
    console.error("Request body:", req.body);
    const course = new Course(req.body);
    await course.save();
    res.status(200).send({
      data: course,
      success: true,
      message: "Course added successfully",
    });
  } catch (error) {
    console.error("Error adding course:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while adding the course.",
      error: error.message, 
    });
  }
});

// Update Course
router.post("/update-course", async (req, res) => {
  try {
    console.error("Request body:", req.body);
    const course = await Course.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: course,
      success: true,
      message: "Course updated successfully",
    });
  } catch (error) {
    console.error("Error updating course:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the course.",
      error: error.message,
    });
  }
});

// Delete Course
router.post("/delete-course", async (req, res) => {
  try {
    const course = await Course.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: course,
      success: true,
      message: "Course deleted successfully"
    })

  } catch (error) {
    res.status(500).send({
      success: false,
      message: "An error occurred while deleting the course.",
      error: error.message,
    });
  }
});

// update contact
router.post("/update-contact", async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: contact,
      success: true,
      message: "Contact updated successfully",
    });
  } catch (error) {
    console.error("Error updating contact:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the contact.",
      error: error.message,
    });
  }
});

// Admin login
router.post("/admin-login", async (req, res) => {
  try {
    const user = await User.findOne({ 
      username : req.body.username, 
      password : req.body.password 
    });
    user.password = "";
    if(user) {
      res.status(200).send({
        data: user,
        success: true,
        message: "Login successfully",
      });
    } else {
      res.status(200).send({
        data: user,
        success: false,
        message: "Invalid username or password",
      });
    }
  } 
  catch(error) {
    res.status(500).send(error);
  }
})

module.exports = router;
