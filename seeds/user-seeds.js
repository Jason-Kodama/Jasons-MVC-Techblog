const { User } = require('../models');
const userData = [
  {
    username: 'Joanna',
    email: 'joanna@hotmail.com',
    password: 'password12345'
  },
  {
    username: 'Avery',
    email: 'avery@gmail.com',
    password: 'password12345'
  },
  {
    username: 'Jordyn',
    email: 'jordyn@aol.com',
    password: 'password12345'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;