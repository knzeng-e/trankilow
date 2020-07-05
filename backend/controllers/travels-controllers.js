// const express = require('express')
const Travels = require('../models/travel.model');

const getTravels = (req, res, next) => {
    Travels.find()
        .then(travels => res.json(travels))
        .catch(error => res.status(400).json('Error: ' + error));
}

const getTravelById = (req, res, next) => {
    const travelId = req.params.id;

    Travels.findById(travelId)
                .then(travel => {
                    res.json(travel)
                })
                .catch(error => {
                    res.status(400).json(error)
                })
}

const getTravelsByUserId = (req, res, next) => {
    const userId = req.params.userId;

    Travels.find(travel => {
        return travel.userId = userId;
    })
}

const addTravel = (req, res, next) => {
    const userId = req.body.userId;
    const from = req.body.from;
    const to = req.body.to;
    const date = Date.parse(req.body.date);
    const capacity = Number(req.body.capacity)

    const newTravel = new Travels({
        userId,
        from,
        to,
        date,
        capacity
    });

    newTravel.save()
        .then(() => res.json('Travel added !'))
        .catch(error => res.status(400).json('Error: ' + error));
}

module.exports = {
    addTravel,
    getTravels,
    getTravelById,
    getTravelsByUserId
}