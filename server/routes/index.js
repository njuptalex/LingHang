const Router = require('koa-router');
const UsersController = require('../controllers/users');

const router = new Router({
  prefix: ''
});
router.get('/', async (ctx) => {
  await ctx.render('index');
});

/**
 * 用户接口
 */
// 创建用户接口（路由）
router.post('/users', UsersController.create);
router.post('/deleteUsers/:id', UsersController.delete);
// 获取用户详情接口（路由）
router.get('/getUsersDetail/:id', UsersController.detail);

module.exports = router;
