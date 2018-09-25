const dodb = require("../db/mysql");

module.exports = {
    getuserinfo: async value => {
        let res = await dodb(`select * from user where username='${value}'`);
        if (res.length > 0) {
            return {
                data: res[0]
            }
        }
        return {
            data: "用户名不存在"
        }
    }
};