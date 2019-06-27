/*
 * @Description: 登录信息
 * @Version: 1.0
 * @Autor: Alex
 * @Date: 2019-06-27 16:16:06
 * @LastEditors: Alex
 * @LastEditTime: 2019-06-27 19:41:16
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define("login", {
        // 用户ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            atuoIncrement: true,
            allowNull: false
        },
        // 以邮箱作为登录名
        login_email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            field: 'login_email'
        },
        // 登录密码
        login_password: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            field: 'login_password'
        }
    }, {
        freezeTableName: true, // 表名称个 model 相同, 否则为 login
        timestamps: false,
        underscored: true
    })
}