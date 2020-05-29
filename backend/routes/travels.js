const router = require('express').Router();
let Travel = require('../models/travel.model');

router.route('/').get((req, res) => {
    Travel.find()
        .then(travels => res.json(travels))
        .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/add').post((req, res) => {
    const userId = req.body.userId;
    const from = req.body.from;
    const to = req.body.to;
    const date = Date.parse(req.body.date);
    const capacity = Number(req.body.capacity)

    const newTravel = new Travel({
        userId,
        from,
        to,
        date,
        capacity
    });

    newTravel.save()
        .then(() => res.json('Travel added !'))
        .catch(error => res.status(400).json('Error: ' + error));
});

module.exports = router;