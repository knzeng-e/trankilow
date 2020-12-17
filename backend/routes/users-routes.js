const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/user.model');

router.get('/', (req, res, next) => {
    User.find()
        .then(users => res.json(users))
        .catch(error => res.status(400).json('Error: ' + error));
});

router.get('/:id', (req, res, next) => {
    User.findById(req.params.id)
        .then((user) => {
            res.json(user);
    })
    .catch(error => res.status(400).json('Error: ' + error))
    console.log(req.body.id);
});

router.delete('/:id', (req, res, next) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json('User deleted');
    })
    .catch(error => res.status(400).json('Error: ' + error))
    console.log(req.body.id);
});

router.post('/update/:id', (req, res, next) => {
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

router.post('/add', (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = bcrypt(req.body.password, 12); //Maybe we would prefer crypt the password on the client side
    const birthDate = req.body.birthDate;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;
    const nbProposal = 0;
    const nbSent = 0;

    const newUser = new User({
        firstName,
        lastName,
        email,
        password,
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