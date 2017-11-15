import sequelize from '../../config/database'
import Sequelize from 'sequelize'
import baseEntity from './base-entity'
import ENUM from './enum'

export const _topicDetail = {
        topicId: { type: Sequelize.INTEGER },
        person1: Sequelize.STRING,
        person2: Sequelize.STRING,
    }
export const topicDetails =  sequelize.define("topic_detail",...Object.assign(_topicDetail, baseEntity),{
        tableName: 'topic_detail',
        timestamps: true
    });
export default topicDetails