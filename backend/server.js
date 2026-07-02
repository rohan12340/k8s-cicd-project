const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.json({
        application: "Kubernetes CI/CD Demo",
        version: "v1",
        status: "Backend Running Successfully"
    });
});

app.get("/health", (req, res) => {
    res.send("Healthy");
});

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});