require('dotenv').config();
const pgp = require('pg-promise')({});

// const cn = {
//     host: "aa1t4b71jqomzxa.clulrco1s8ry.us-east-2.rds.amazonaws.com", // server name or IP address;
//     port: 5432,
//     database: "ebdb",
//     user: "zmartboard",
//     password: "zmartboard"
// };
// const cn = {
//     host: process.env.HOST_LESSON, // server name or IP address;
//     port: 5432,
//     database: process.env.DB_LESSON,
//     user: process.env.USER_LESSON,
//     password: process.env.PASS_LESSON
// };

// testng heroku db
const cn = {
    host: "ec2-34-199-209-37.compute-1.amazonaws.com", // server name or IP address;
    port: 5432,
    database: "d8sn2k9onmisub",
    user: "unrwzvobgyulgo",
    password: "a100ad4f0421fbb8457d6cb4c8da0c276b32a26f35e7743d54f19eb7b6c783e5"
};
// alternative:
// var cn = 'postgres://username:password@host:port/database';

const db = pgp(cn); // database instance;

// select and return a single user name from id:
module.exports.query_psql_lesson = async function(query, vars) {
    return db.query(query, vars)
    .then(data => {
        console.log(data); // print user name;
        return data;
    })
    .catch(error => {
        console.log(error); // print the error;
        return null
    });
}
