import sequelize from '../../config/database'
import Sequelize from 'sequelize'

export const topics =  sequelize.define("topic", {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        name: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },
        type: { type: Sequelize.ENUM('vocabulary', 'samoleSentence','conversation','discrimination') },
        version: {type:Sequelize.ENUM('original','jew','oz')},
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
    },{
        tableName: 'topic',
        timestamps: true
    });
export default topics