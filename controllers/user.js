const userModel = require("../models/user");

module.exports = {
    getUserInfo: async (ctx, next) => {
        let userName = ctx.request.body.name;
        try {
            let res = await userModel.getuserinfo(userName);
            if (res.length > 0) {
                ctx.body = [0, res[0]];
                return;
            }
            ctx.body = [111, "用户名不存在"];
        } catch (error) {
            console.error("-------------------------controllers-Error--------------------------");
            console.log(error);
            ctx.body = [500, "服务器繁忙，请稍后重试"];
        }
    }
};