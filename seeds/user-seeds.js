const { User } = require('../models');
const userData = [
    {
        "name": "Joanna",
        "email": "joanna@hotmail.com",
        "password": "password12345"
    },
    {
        "name": "Avery",
        "email": "avery@gmail.com",
        "password": "password12345"
    },
    {
        "name": "Jordyn",
        "email": "jordyn@aol.com",
        "password": "password12345"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;