import sequelize from '../../config/database'
import Sequelize from 'sequelize'
import baseEntity from './base-entity'
import ENUM from './enum'

export const _token = {
    acceptToken: DataTypes.STRING,
    refreshToken: DataTypes.STRING,
    expired: DataTypes.DATE,
    isSignedOut: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
}
export const tokens = sequelize.define("token", ...Object.assign(_token, baseEntity), {
    tableName: 'token',
    timestamps: true
});
export default tokens