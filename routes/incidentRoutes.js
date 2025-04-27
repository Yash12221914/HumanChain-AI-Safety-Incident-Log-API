const express = require("express");
const router = express.Router();
const {
    getIncidents,
    getIncident,
    createIncident,
    updateIncident,
    deleteIncident,
} = require("../controllers/incidentController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getIncidents).post(createIncident);

router.route("/:id").get(getIncident).put(updateIncident).delete(deleteIncident);


module.exports = router;