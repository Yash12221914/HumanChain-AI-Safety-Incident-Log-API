Safety Incidents Backend
A Node.js + Express backend API for managing safety incident reports, including user registration, authentication, and CRUD operations on incidents.

📦 Tech Stack
Language: JavaScript

Framework: Node.js, Express.js

Database: MongoDB (with Mongoose ODM)

Authentication: JWT (JSON Web Token)

Password Security: bcrypt

⚙️ Installation and Running Locally
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/safetyIncidents-backend.git
cd safetyIncidents-backend
Install dependencies

bash
Copy
Edit
npm install
Create a .env file in the root directory and add the following environment variables:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_jwt_secret_key
Run the server

bash
Copy
Edit
npm run dev
The server will start at:
http://localhost:5000

🛠️ Setting up the Database
You will need a MongoDB database.

Create a free account at MongoDB Atlas.

Create a cluster and get your MongoDB connection URI.

Paste the URI into your .env file as MONGO_URI.

No need to manually create collections.
Mongoose will automatically create the users and incidents collections when you interact with them.

🔥 API Endpoints
All routes start with /api

👤 User Routes

Method	Path	Description
POST	/api/user/register	Register a new user
POST	/api/user/login	Login and get token
GET	/api/user/current	Get current user details
Example calls:

Register user

bash
Copy
Edit
curl -X POST http://localhost:5000/api/user/register \
-H "Content-Type: application/json" \
-d '{"username":"john","email":"john@example.com","password":"password123"}'
Login user

bash
Copy
Edit
curl -X POST http://localhost:5000/api/user/login \
-H "Content-Type: application/json" \
-d '{"email":"john@example.com","password":"password123"}'
🚨 Incident Routes (Require Bearer Token in Authorization Header)

Method	Path	Description
GET	/api/incident	Get all incidents of logged user
POST	/api/incident	Create a new incident
GET	/api/incident/:id	Get incident by ID
PUT	/api/incident/:id	Update incident by ID
DELETE	/api/incident/:id	Delete incident by ID
Example calls:

Create incident

bash
Copy
Edit
curl -X POST http://localhost:5000/api/incident \
-H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
-H "Content-Type: application/json" \
-d '{"title":"Fire at site","description":"Fire broke out at north wing","severity":"high"}'
Get all incidents

bash
Copy
Edit
curl -X GET http://localhost:5000/api/incident \
-H "Authorization: Bearer YOUR_ACCESS_TOKEN"
Update incident

bash
Copy
Edit
curl -X PUT http://localhost:5000/api/incident/INCIDENT_ID \
-H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
-H "Content-Type: application/json" \
-d '{"title":"Updated title"}'
Delete incident

bash
Copy
Edit
curl -X DELETE http://localhost:5000/api/incident/INCIDENT_ID \
-H "Authorization: Bearer YOUR_ACCESS_TOKEN"
✨ Design Decisions and Challenges (Optional)
JWT Authentication: Chose JWT for stateless, scalable authentication.

Separation of Concerns: Separated user and incident logic into different controllers.

Authorization: Only the user who created an incident can update or delete it.

Error Handling: Used express-async-handler for cleaner async error handling.

Challenges:

Managing proper error responses (400, 401, 403, 404) correctly.

Ensuring secure password hashing and validation.

Fixing small bugs related to async route handling.

✅ You're ready to run and test the project!
