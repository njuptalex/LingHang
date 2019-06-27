/*
 * @Description: 注册接口
 * @Version: 1.0
 * @Autor: Alex
 * @Date: 2019-06-27 16:37:18
 * @LastEditors: Alex
 * @LastEditTime: 2019-06-28 00:25:58
 */

const UsersModel = require('../modules/users')

class UsersController {
	/**
	 * @description: 收到注册POST请求, 创建用户
	 * @param {type} 
	 * @returns: 
	 * @author: Alex
	 */
	static async create(ctx) {
		let req = ctx.request.body;
		if (req.users_name &&
			req.users_real_name &&
			req.users_std_id &&
			req.users_email &&
			req.users_password
		) {
			try {
				// 创建用户模型
				const ret = await UsersModel.createUsers(req);
				const data = await UsersModel.getUsersDetail(ret.id);

				ctx.response.status = 200;
				ctx.body = {
					code: 200,
					msg: "创建用户成功",
					data
				}
			} catch (err) {
				ctx.response.status = 412;
				ctx.body = {
					code: 200,
					msg: "创建用户失败",
					data: err.errors[0].message,
				}
			}
		} else {
			ctx.response.status = 416;
			ctx.body = {
				code: 200,
				msg: "参数不全",
			}
		}
	}
	/**
	 * @description: GET请求用户详情
	 * @param ctx 
	 * @returns {Promise.<void>} 
	 * @author: Alex
	 */
	static async detail(ctx) {
		let id = ctx.params.id;
		if (id) {
			try {
				// 查询用户详情模型
				let data = await UsersModel.getUsersDetail(id);
				ctx.response.status = 200;
				ctx.body = {
					code: 200,
					msg: '查询成功',
					data
				}

			} catch (err) {
				ctx.response.status = 412;
				ctx.body = {
					code: 412,
					msg: '查询失败',
					err
				}
			}
		} else {
			try {
				// 查询用户详情模型
				let data = await UsersModel.getUsersDetail(0);
				ctx.response.status = 200;
				ctx.body = {
					code: 200,
					msg: '查询成功',
					data
				}

			} catch (err) {
				ctx.response.status = 412;
				ctx.body = {
					code: 412,
					msg: '查询失败',
					err
				}
			}
		}
	}
	/**
	 * @description: POST 删除用户
	 * @param ctx
	 * @returns: {Promise.<void>} 
	 * @author: Alex
	 */
	static async delete(ctx) {
		let id = ctx.params.id;
		if (id) {
			try {
				// 创建用户模型
				const ret = await UsersModel.deleteUsers(id);
				ctx.response.status = 200;
				ctx.body = {
					code: 200,
					msg: '删除用户成功',
				}

			} catch (err) {
				ctx.response.status = 412;
				ctx.body = {
					code: 200,
					msg: '删除用户失败',
				}
			}
		} else {
			ctx.response.status = 416;
			ctx.body = {
				code: 200,
				msg: '参数不齐全',
			}
		}
	}
}

module.exports = UsersController
