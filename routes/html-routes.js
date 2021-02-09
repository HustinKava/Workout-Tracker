const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile('index1.html', { root: path.join(__dirname, '../public') });
});

router.get("/exercise", (req, res) => {
    res.sendFile('exercise.html', { root: path.join(__dirname, '../public') });
});

router.get("/stats", (req, res) => {
    res.sendFile('stats.html', { root: path.join(__dirname, '../public') });
});

module.exports = router;