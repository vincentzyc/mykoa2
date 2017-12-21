const userModel = require("../models/user");

module.exports = {
    getUserInfo: async (ctx, next) => {
        let userName = ctx.request.body.userName;
        try {
            let data = await userModel.getuserinfo(userName);
            ctx.body = {
                param: data[0]
            };
        } catch (error) {
            console.log("eeeeeeeeeeeeeeeeeeeeeERROReeeeeeeeeeeeeeeeeee");
            console.log(error);
            ctx.body = {
                param: "服务器繁忙，请稍后重试"
            };
        }
    }
};
