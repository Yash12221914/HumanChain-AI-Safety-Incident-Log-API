const asyncHandler = require("express-async-handler");
const Incident = require("../models/incidentsModel");

//@desc Get all incidents
//@route GET /api/incident
//@access private
const getIncidents = asyncHandler(async (req, res) => {
    const incidents = await Incident.find({ user_id: req.user.id });
    res.status(200).json(incidents);
});

//@desc Get specific incident by id
//@route GET /api/incident/:id
//@access private
const getIncident = asyncHandler(async (req, res) => {
    const incident = await Incident.findById(req.params.id);
    if (!incident) {
        res.status(404);
        throw new Error("Incident not found");
    }
    res.status(200).json(incident);
});

//@desc Create an incident
//@route POST /api/incident
//@access private
const createIncident = asyncHandler(async (req, res) => {
    console.log("The request body is: ", req.body);
    const { title, description, severity } = req.body;
    if (!title || !description || !severity) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    const incident = await Incident.create({
        title,
        description,
        severity,
        user_id: req.user.id
    });

    res.status(201).json(incident); 
});


//@desc Update specific incident by id
//@route PUT /api/incident/:id
//@access private
const updateIncident = asyncHandler(async (req, res) => {
    const incident = await Incident.findById(req.params.id);
    if (!incident) {
        res.status(404);
        throw new Error("Incident not found");
    }

    if (incident.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User doesn't have permission to update other's incidents");
    }

    const updatedIncident = await Incident.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedIncident);
});

//@desc Delete specific incident by id
//@route DELETE /api/incident/:id
//@access private
const deleteIncident = asyncHandler(async (req, res) => {
    const incident = await Incident.findById(req.params.id);
    if (!incident) {
        res.status(404);
        throw new Error("Incident not found");
    }

    if (incident.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User doesn't have permission to delete other's incidents");
    }

    await Incident.deleteOne({ _id: req.params.id });
    res.status(200).json(incident);
});

module.exports = { 
    getIncidents,
    getIncident,
    createIncident,
    updateIncident,
    deleteIncident
};
