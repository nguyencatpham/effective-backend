import sequelize from '../../config/database'
import Sequelize from 'sequelize'
import baseEntity from './base-entity'
import ENUM from './enum'

export const _userRole = {
    userId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER
    }
export const userRoles =  sequelize.define("user_role",...Object.assign(_userRole, baseEntity),{
        tableName: 'user_role',
        timestamps: true
    });
export default userRoles