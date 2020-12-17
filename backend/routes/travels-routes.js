const router = require('express').Router();
// const Travel = require('../models/travel.model');
const travelsControllers = require('../controllers/travels-controllers');
// const HttpError = require ('../models/http-error');

router.get('/', travelsControllers.getTravels);
router.post('/add', travelsControllers.addTravel);
router.get('/:travelId', travelsControllers.getTravelById);

// router.post('/add', (req, res, next) => {
//     const userId = req.body.userId;
//     const from = req.body.from;
//     const to = req.body.to;
//     const date = Date.parse(req.body.date);
//     const capacity = Number(req.body.capacity)

//     const newTravel = new Travel({
//         userId,
//         from,
//         to,
//         date,
//         capacity
//     });

//     newTravel.save()
//         .then(() => res.json('Travel added !'))
//         .catch(error => res.status(400).json('Error: ' + error));
// });

module.exports = router;