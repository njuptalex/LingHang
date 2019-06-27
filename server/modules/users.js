/*
 * @Description: 注册逻辑定义
 * @Version: 1.0
 * @Autor: Alex
 * @Date: 2019-06-27 16:37:18
 * @LastEditors: Alex
 * @LastEditTime: 2019-06-28 00:12:38
 */

const seq = require("sequelize");
// 引入建立连接mysql数据库的db.js文件
const db = require("../util/db");
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入数据表模型文件
const Users = Sequelize.import("../schema/users");
// 自动创建表
Users.sync({
    force: false
});

class UsersModel {
    /**
     * @description: 创建用户模型
     * @param: data
     * @returns {Promise<*>} 
     * @author: Alex
     */
    static async createUsers(data) {
        return await Users.create({
            users_name: data.users_name,
            users_email: data.users_email,
            users_real_name: data.users_real_name,
            users_std_id: data.users_std_id,
            users_password: data.users_password
        });
    }
    /**
         * @description: 用户查询接口
         * @param id 用户id
         * @returns {Promise<Model>}
         * @author: Alex
         */
    static async getUsersDetail(id) {
        
        if (id) {
            let users = await Users.findOne({
              where: {
                [seq.Op.or]: [{
                    id: id
                  },
                  {
                    users_email: id
                  }
                ]
              }
            });
            console.log('找到的用户为：')
            console.log(users.users_email)
            return users;
          } else {
            const users = Users.findAll();
            return users;
          }
    }

  /**
   * @description: 删除用户
   * @param id 用户id
   * @returns {Promise<Model>}
   * @author: Alex
   */
  static async deleteUsers(id) {
    console.log("用户id：");
    console.log(id);
    const users = await Users.destroy({
      where: {
        id: id
      }
    });
    return users;
  }
}

module.exports = UsersModel;