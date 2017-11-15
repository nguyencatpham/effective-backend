import sequelize from '../../config/database'
import Sequelize from 'sequelize'
import baseEntity from './base-entity'
import ENUM from './enum'

export const _socialLogin = {
    type: { type: Sequelize.ENUM(Object.values(ENUM.socialLoginType)) },
    token: {type: Sequelize.STRING},
    expiredTime: Sequelize.Date
}
export const socialLogins =  sequelize.define("socialLogin",...Object.assign(_socialLogin, baseEntity), {
        tableName: 'socialLogin',
        timestamps: true
    });
export default socialLogins