const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 5000;

const API_KEY = "660b1948f86f2c93d39330bce1096bd3";   // put your OpenWeather API key here

app.use(express.static("views"));

// Home route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "Client_Index.html"));
});

// Weather API route
app.get("/weather/:city", async (req, res) => {

    const city = req.params.city;

    try {

        const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        console.log(response.data); // debug
        res.json(response.data);

    } catch (error) {

        console.log(error.message);
        res.status(500).json({ error: "Failed to fetch weather data" });

    }

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});