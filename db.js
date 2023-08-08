const Pool = require("pg").Pool

const pool = new Pool( {
    user: "_o_chrisstruong_o_",
    password: "triettruong",
    host: "localhost",
    port:5432,
    database: "perntodo"
})

module.exports = pool