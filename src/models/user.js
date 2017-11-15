import sequelize from '../../config/database'
import Sequelize from 'sequelize'
import baseEntity from './base-entity'
import ENUM from './enum'

export const _user = {
    guid: { type: Sequelize.STRING },
    userName: { type: Sequelize.STRING },
    passwordSalt: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    passwordHash: { type: Sequelize.STRING },
    firstName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    phoneNumber: { type: Sequelize.STRING },
    birthday: { type: Sequelize.STRING },
    pin: { type: Sequelize.STRING },
    isActive: { type: Sequelize.BOOLEAN },
    isDeleted: { type: Sequelize.BOOLEAN },
    gender: { type: Sequelize.ENUM(Object.values(ENUM.gender)) },
    resetPasswordToken: { type: Sequelize.STRING },
    socialId: Sequelize.INTEGER,
    isActive: Sequelize.BOOLEAN,
    mailToken: Sequelize.STRING,
    lastLogedIn: Sequelize.Date
}

export const users = sequelize.define("user",...Object.assign(_topic, baseEntity), {
        tableName: 'user',
        timestamps: true
    });
export default users