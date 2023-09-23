const pool = require("../../config/connect_db");

const get_hospital_creds = async (username) => {
	const query = `SELECT * FROM hospital_creds where username = $1 LIMIT 1;`;
	const values = [username];
	try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    return result.rows[0];
  } catch (error) {
    console.error(error);
  }
};

module.exports = get_hospital_creds;