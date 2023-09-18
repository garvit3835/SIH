const pool = require("../../config/connect_db");

const get_appointments = async (d_id) => {
  const today = new Date().toISOString().split('T')[0];
	const query = "SELECT * FROM appointments WHERE doctor = $1 and status = 0 and DATE(time) = '$2'";
	const values = [d_id, today];
	await pool.connect();
	try {
    const result = await pool.query(query, values);
    return result;
	} finally {
		await pool.end();
  }
};

module.exports = get_appointments;
