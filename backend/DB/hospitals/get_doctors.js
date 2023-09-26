const pool = require("../../config/connect_db");

const get_doctors = async (h_id) => {
	const query = `SELECT *
  FROM doctors
  WHERE hospital = $1;
  `;
	const values = [h_id];
	try {
		const client = await pool.connect();
		const result = await client.query(query, values);
		client.release();
		console.log(result.rows)
		return result.rows;
	} catch (error) {
		console.error(error);
	}
};

// get_doctors(1)

module.exports = get_doctors;
