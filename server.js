const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/incident",require("../safetyIncidents-backend/routes/incidentRoutes"));
const userRoutes = require("../safetyIncidents-backend/routes/userRoutes");
app.use("/api/users",userRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
