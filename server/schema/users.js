/*
 * @Description: users表结构的定义, 与注册时填写的信心一致
 * @Version: 1.0
 * @Autor: Alex
 * @Date: 2019-06-27 16:16:06
 * @LastEditors: Alex
 * @LastEditTime: 2019-06-28 00:38:13
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define("users", {
        // 用户ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        // 用户邮箱
        users_email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            field: 'users_email'
        },
        // 用户名
        users_name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            field: 'users_name'
        },
        // 真实姓名
        users_real_name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'users_real_name'
        },
        // 学号
        users_std_id: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'users_std_id'
        },
        // 密码
        users_password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'users_password'
        }
    }, {
            freezeTableName: true,
            timestamps: false,
            underscored: true
        })
}