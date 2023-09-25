const {Pool} = require("pg");
require('dotenv').config();

const pool = new Pool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_DATABASE,
	port: process.env.DB_PORT,
	ssl: {
    // This should be set to true for Amazon RDS instances with SSL enabled.
    rejectUnauthorized: false,
  },
});

module.exports = pool;