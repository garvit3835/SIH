const pool = require("../../config/connect_db");

const get_doctor_creds = async (username) => {
	const query = `SELECT * FROM doctor_creds where username = $1 LIMIT 1;`;
	const values = [username];
	try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    // console.log(result.rows[0])
    return result.rows[0];
  } catch (error) {
    console.error(error);
  }
};

// get_doctor_creds("garvit123")

module.exports = get_doctor_creds;