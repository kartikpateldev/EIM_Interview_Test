const Sequelize = require('sequelize')
const UserModel = require('./models/user')

const sequelize = new Sequelize(process.env.DB_URL)

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const User = UserModel(sequelize, Sequelize)

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  User,
//   Blog,
//   Tag
}