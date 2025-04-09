![Screenshot 2025-04-01 000410](https://github.com/user-attachments/assets/cb1e65a5-9818-4138-bb23-776168fbbe11)
![image](https://github.com/user-attachments/assets/88573add-2913-43ef-a7b1-1fa2f93e6ce8)

📝 Task App
This project is built using JavaScript for both the frontend and backend. The database used is MongoDB, hosted on MongoDB Atlas.

🚀 Setup Instructions
1. Clone the Repository
Use the following command to clone the task-app branch directly:

bash
Copy
Edit
git clone --branch task-app https://github.com/Lunar9999/tasks.git
2. Navigate into the Folders
The cloned project contains two main folders:

Frontend/

Backend/

3. Install Dependencies
Install required packages in both folders using npm:

bash
Copy
Edit
# Frontend
cd Frontend
npm install

# Backend (open another terminal)
cd ../Backend
npm install
4. Run the App
Run both the frontend and backend in separate terminal windows:

bash
Copy
Edit
# In Frontend folder
npm start

# In Backend folder
npm start
The backend server will keep running to serve requests while the frontend handles the user interface.

📦 Third-Party Libraries & Tools
Frontend Dependencies
Located in Frontend/package.json:

json
Copy
Edit
"@reduxjs/toolkit": "^1.9.1",
"@tailwindcss/line-clamp": "^0.4.2",
"@testing-library/jest-dom": "^5.16.5",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"@types/jest": "^29.2.4",
"@types/node": "^18.11.17",
"axios": "^1.7.9",
"chart.js": "^4.4.7",
"react": "^18.2.0",
"react-chartjs-2": "^5.3.0",
"react-dom": "^18.2.0",
"react-redux": "^8.0.5",
"react-router-dom": "^6.29.0",
"react-scripts": "5.0.1",
"typescript": "^4.9.4",
"web-vitals": "^2.1.4"
Backend Dependencies
Located in Backend/package.json:

json
Copy
Edit
"axios": "^1.7.9",
"bcryptjs": "^3.0.1",
"cookie-parser": "^1.4.7",
"cors": "^2.8.5",
"dotenv": "^16.4.7",
"express": "^4.21.2",
"jsonwebtoken": "^9.0.2",
"mongoose": "^8.1.1",
"nodemailer": "^6.10.0"
🔐 Environment Variables
Environment variables are excluded from the repository due to security reasons.

Example .env File (Backend):
env
Copy
Edit
JWT_SECRET=your_jwt_secret_here
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_app_password_here
PORT=10000
WAKATIME_API=your_wakatime_api_key
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
⚠️ Make sure to create a .env file in your Backend folder and fill it with your own values.

🔧 Additional Notes
WakaTime API is used for tracking development time.

NodeMailer is used for email services.

MongoDB Atlas is used for cloud-hosted NoSQL database management.


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
📌 Note: You'll use Mail and Password for login.

