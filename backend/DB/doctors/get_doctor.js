const pool = require("../../config/connect_db");

const get_doctor = async (d_id) => {
	const query = `SELECT * FROM doctors WHERE d_id = $1 LIMIT 1;
  `;
	const values = [d_id];
	try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    return result.rows[0];
  } catch (error) {
    console.error(error);
  }
};

module.exports = get_doctor;