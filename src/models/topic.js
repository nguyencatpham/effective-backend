import sequelize from '../../config/database'
import Sequelize from 'sequelize'
import baseEntity from './base-entity'
import ENUM from './enum'

export const _topic = {
        name: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },
        type: { type: Sequelize.ENUM(Object.values(ENUM.topicType)) },
        version: {type:Sequelize.ENUM(Object.values(ENUM.topicVersion))}
    }
export const topics =  sequelize.define("topic",...Object.assign(_topic, baseEntity),{
        tableName: 'topic',
        timestamps: true
    });
export default topics