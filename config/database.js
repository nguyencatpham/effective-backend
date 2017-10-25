import config from './config'
import Sequelize from 'sequelize'

let db = config.mysql
export const sequelize = new Sequelize(db.database, db.dialect, db.password, {
    host: db.host,
    dialect: db.dialect,
    pool: db.pool,
    // SQLite only
    storage: db.storage
  });

  //use the .authenticate() function like this to test the connection.
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize
