import sequelize from '../../config/database'
import Sequelize from 'sequelize'

export const models =  sequelize.define("topic", {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        name: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },
        type: { type: Sequelize.ENUM('vocabulary', 'reading') }
    });
export default models