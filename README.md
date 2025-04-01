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

