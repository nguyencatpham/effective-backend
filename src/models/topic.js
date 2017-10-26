import sequelize from '../../config/database'
import Sequelize from 'sequelize'

export const topics =  sequelize.define("topic", {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        name: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },
        type: { type: Sequelize.ENUM('vocabulary', 'reading') }
    },{
        tableName: 'topic',
        timestamps: false
    });
export default topics