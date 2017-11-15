import sequelize from '../../config/database'
import Sequelize from 'sequelize'

export const baseEntity = {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    createdAt: {
        type: Sequelize.DATE,
        field: 'createdAt',
        defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
        type: Sequelize.DATE,
        field: 'updatedAt',
        defaultValue: sequelize.literal('NOW()')
    }
}
export default baseEntity