NPM start for front end and backend folders after npm install for both front end and backend folders , navigate to backend, frontend, hit npm start


🔐 Add this to your README.md
md
Copy
Edit
## 🔧 Backend Environment Configuration

To run the backend locally, you’ll need to set up your own `.env` file inside the `backend/` directory.

Create a `.env` file and add the following:

```env
JWT_SECRET=your_jwt_secret_here
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_app_password_here
PORT=10000
WAKATIME_API=your_wakatime_api_key
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
📌 Note: You can use Gmail with App Passwords for EMAIL_PASS.

📄 waka.js File
The backend expects a file named waka.js inside:

bash
Copy
Edit
backend/routes/waka.js
This file handles WakaTime API integration. You can create your own version using your personal WakaTime API key.

Here’s a basic structure you can use:

js
Copy
Edit
// backend/routes/waka.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/wakatime', async (req, res) => {
  try {
    const response = await axios.get('https://wakatime.com/api/v1/users/current/stats/last_7_days', {
      headers: {
        Authorization: `Bearer ${process.env.WAKATIME_API}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'WakaTime fetch failed' });
  }
});

module.exports = router;
