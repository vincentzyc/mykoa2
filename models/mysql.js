const mysql = require("mysql");

//使用连接池
const pool = mysql.createPool({
    host: "数据库地址",
    user: "用户名",
    password: "密码",
    database: "数据库名",
    insecureAuth: true
});

let dodb = function(sql) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                console.log("---------getConnection error-----------" + err);
                resolve(err);
            }
            connection.query(sql, (err, res) => {
                if (err) {
                    console.log("-----------ERROR-----------" + err);
                    reject("ERROR");
                }
                resolve(res);
                connection.release();
            });
        });
    });
};

module.exports = dodb; 

//不使用连接池
// const connection = mysql.createConnection({
    // host: "数据库地址",
    // user: "用户名",
    // password: "密码",
    // database: "数据库名",
    // insecureAuth: true
// });
// let connectdb = () => {
//     return new Promise(function(resolve, reject) {
//         connection.connect(function(err) {
//             if (err) {
//                 console.log("error connecting " + err.stack);
//                 resolve({ code: -1 });
//             }
//             console.log("connected as id " + connection.threadId);
//             resolve({ code: 0 });
//         });
//     });
// };
// let dodb = async () => {
//     let connect = await connectdb();
//     if (connect.code === 0) {
//         return new Promise(function(resolve, reject) {
//             connection.query(sql, function(err, res) {
//                 if (err) {
//                     console.log("eeeeeeeeeeeeeeeeeeeeeeERROr");
//                     reject("ERROR");
//                 }
//                 resolve(res);
//             });
//             connection.end(function(error) {
//                 if (error) {
//                     console.log("Mysql connection close failed !");
//                     throw error;
//                 }
//             });
//         });
//     }
// };
// module.exports = dodb; 