const base = require("./config");
const mysql = require("mysql");

//使用连接池
const pool = mysql.createPool({
    host: base.host,
    user: base.user,
    password: base.password,
    database: base.database,
    insecureAuth: true
});

let dodb = sql => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                console.error("-----------------------getConnection error---------------------");
                reject(err);
            }
            connection.query(sql, (err, res) => {
                if (err) {
                    console.error("-----------------------query error-------------------------");
                    console.error(err);
                    reject(err);
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
// host: base.host,
// user: base.user,
// password: base.password,
// database: base.database,
//     insecureAuth: true
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