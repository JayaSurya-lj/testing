const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route for fetching Instagram data
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if (data) {
        res.render("instagram.ejs", { data });
    } else {
        res.render("error.ejs");
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
