/**
 * 在app.use(router)之前调用
 */
var format = async (ctx, next) => {
    await next();
    let msg = ctx.body[0] === 0 ? '成功' : '失败';
    ctx.body = {
        code: ctx.body[0],
        msg: msg,
        data: ctx.body[1]
    }
}

module.exports = format;