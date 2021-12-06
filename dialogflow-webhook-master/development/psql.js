require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
const pgp = require('pg-promise')({});
const cn = {
    host: process.env.HOST, // server name or IP address;
    port: 5432,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PASS
};
// alternative:
// const cn = 'postgres://username:password@host:port/database';

// DATABASE TESTING
// const cn = {
//     host: "ec2-34-199-209-37.compute-1.amazonaws.com", // server name or IP address;
//     port: 5432,
//     database: "d8sn2k9onmisub",
//     user: "unrwzvobgyulgo",
//     password: "a100ad4f0421fbb8457d6cb4c8da0c276b32a26f35e7743d54f19eb7b6c783e5",
//     ssl: true
// };
// alternative TESTING
// postgres://unrwzvobgyulgo:a100ad4f0421fbb8457d6cb4c8da0c276b32a26f35e7743d54f19eb7b6c783e5@ec2-34-199-209-37.compute-1.amazonaws.com:5432/d8sn2k9onmisub
// const cn ='postgres://unrwzvobgyulgo:a100ad4f0421fbb8457d6cb4c8da0c276b32a26f35e7743d54f19eb7b6c783e5@ec2-34-199-209-37.compute-1.amazonaws.com:5432/d8sn2k9onmisub?ssl=true'


const db = pgp(cn); // database instance;

// select and return a single user name from id:
module.exports.query_psql = async function(query, vars) {
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

// alternative - new ES7 syntax with 'await':
// await db.one('SELECT name FROM users WHERE id = $1', [123]);