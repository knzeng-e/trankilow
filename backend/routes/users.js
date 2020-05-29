const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            res.json(user);
    })
    .catch(error => res.status(400).json('Error: ' + error))
    console.log(req.body.id);
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json('User deleted');
    })
    .catch(error => res.status(400).json('Error: ' + error))
    console.log(req.body.id);
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.email = req.body.email;
            user.birthDate = req.body.birthDate;
            user.address = req.body.address;
            user.phoneNumber = req.body.phoneNumber;

            user.save()
                .then(user => {
                    res.json('User Updated ! => ' + user);
                })
                .catch(error => res.status(400).json('Error: ' + error));
        })
        .catch(error => res.status(400).json('Error: ' + error));
})

router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const birthDate = req.body.birthDate;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;
    const nbProposal = 0;
    const nbSent = 0;

    const newUser = new User({
        firstName,
        lastName,
        email,
        address,
        birthDate,
        phoneNumber,
        nbProposal,
        nbSent
    });

    newUser.save()
        .then(() => res.json('User added !'))
        .catch(error => res.status(400).json('Error: ' + error));
});

module.exports = router;