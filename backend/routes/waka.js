const express = require("express");
const axios = require("axios");

const router = express.Router();
const API_KEY =  // Hardcoded API key

// Route to fetch WakaTime stats, including projects and durations
router.get("/stats", async (req, res) => {
  try {
    // Fetch last 7 days stats (Overview)
    const statsResponse = await axios.get(
      "https://wakatime.com/api/v1/users/current/stats/last_7_days",
      { params: { api_key: API_KEY } }
    );

    // Fetch projects data
    const projectsResponse = await axios.get(
      "https://wakatime.com/api/v1/users/current/projects",
      { params: { api_key: API_KEY } }
    );

    // Fetch durations for today
    const today = new Date().toISOString().split("T")[0]; // Get today's date (YYYY-MM-DD)
    const durationsResponse = await axios.get(
      `https://wakatime.com/api/v1/users/current/durations`,
      { params: { api_key: API_KEY, date: today } }
    );

    // Combine all responses into one JSON object
    res.json({
      stats: statsResponse.data,
      projects: projectsResponse.data,
      durations: durationsResponse.data,
    });
  } catch (error) {
    console.error("Error fetching WakaTime data:", error);
    res.status(500).json({ error: "Failed to fetch WakaTime stats" });
  }
});

module.exports = router;
