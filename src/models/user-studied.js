import sequelize from '../../config/database'
import Sequelize from 'sequelize'
import baseEntity from './base-entity'
import ENUM from './enum'

export const _userStudied = {
    userId: { type: Sequelize.INTEGER},
    topicDetailId: { type: Sequelize.INTEGER},
    point: { type: Sequelize.INTEGER },
    studyCount: { type: Sequelize.INTEGER },
    recentStudy: { type: Sequelize.DATE },
    }
export const userStudies =  sequelize.define("user_studied",...Object.assign(_userStudied, baseEntity),{
        tableName: 'user_studied',
        timestamps: true
    });
export default userStudies