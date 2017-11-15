import sequelize from '../../config/database'
import Sequelize from 'sequelize'
import baseEntity from './base-entity'
import ENUM from './enum'

export const _role = {
        name: { type: Sequelize.STRING },
        localizeName: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },
    }
export const roles =  sequelize.define("role",...Object.assign(_role, baseEntity),{
        tableName: 'role',
        timestamps: true
    });
export class Role extends baseEntity{

}
export default roles