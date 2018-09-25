const dodb = require("../db/mysql");

module.exports = {
    getuserinfo: async value => {
        let res = await dodb(`select * from user where username='${value}'`);
        return res;
    }
};