![Screenshot 2025-04-01 000410](https://github.com/user-attachments/assets/cb1e65a5-9818-4138-bb23-776168fbbe11)
![image](https://github.com/user-attachments/assets/88573add-2913-43ef-a7b1-1fa2f93e6ce8)

The project was built on JavaScript, for both frontend and backend.
The Database used is MongoDB, and is hosted on Mongo Atlas db.
Setup 
After Cloning code from https://github.com/Lunar9999/tasks.git use the default branch which is the task-app branch when cloning, 
This is the command to use 
git clone --branch task-app https://github.com/Lunar9999/tasks.git
In the APP there are two folders : Frontend , Backend
NPM install into both folders
Use Front-end -Npm install (Front end)
Backend -npm install (Server)
Then finally npm start in both folders
 This can be done in two different cmd terminals as the server instance will constantly run in one of them.
The following are the third-party apps and services used for our app development
Also, note that the libraries are found in the package. Json of the respective backend and frontend folders once you clone the app from Git Hub.
Libraries for frontend
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

Libraries for backend
    "axios": "^1.7.9",
    "bcryptjs": "^3.0.1",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.1.1",
    "nodemailer": "^6.10.0"

The env files were excluded from the GitHub repository as they have secret tokens and GitHub couldn’t allow us to commit, this is the structure of our env file 
Other services used and configurations notably were 
WakaTime access key, setting up email password for node mailer, and setting up a connection string for Mongo Atlas which contains our username and password.

JWT_SECRET=your_jwt_secret_here
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_app_password_here
PORT=10000
WAKATIME_API=your_wakatime_api_key
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development







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

