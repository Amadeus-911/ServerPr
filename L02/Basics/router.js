const express = require("express");
const router = express.Router();

const fs = require("fs");

router.get("/", (req, res) => {
    res.send("Home Page");
});

router.get("/about", (req, res) => {
    res.send("About Page");
});

router.get("/cv", (req, res) => {
    educations = fs.readFileSync("data/education", { encoding: "utf-8" });
    educations = JSON.parse(String(educations));

    experiences = fs.readFileSync("data/experiences", { encoding: "utf-8" });
    experiences = JSON.parse(String(experiences));

    edus = [];
    exp = [];

    for (let key in educations) {
        edus.push(educations[key]);
    }
    for (let key in experiences) {
        exp.push(experiences[key]);
    }

    res.render("cv", { name: "Tasnim Ahmed", educations: edus, experiences: exp });
});

module.exports = router;
