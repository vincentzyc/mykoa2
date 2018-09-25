const userModel = require("../models/user");

module.exports = {
    getUserInfo: async (ctx, next) => {
        let userName = ctx.request.body.name;
        try {
            let data = await userModel.getuserinfo(userName);
            ctx.body = data;
        } catch (error) {
            console.error("-------------------------controllers-Error--------------------------");
            console.log(error);
            ctx.body = {
                param: "服务器繁忙，请稍后重试"
            };
        }
    }
};