const db = require('../config/connection');
const { User, Letter } = require('../models');
const userSeeds = require('./userSeeds.json');
const letterSeeds = require('./letterSeeds.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Letter.deleteMany({});
  await User.create(userSeeds);
  await Letter.create(letterSeeds);

  console.log('Seeded!');
  process.exit(0);
});
