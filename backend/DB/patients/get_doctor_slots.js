const pool = require("../../config/connect_db");

const get_doctor_slots = async (d_id) => {
	const query = `SELECT *
		FROM doctor_slots
		WHERE doctor = $1
		AND max_patients > booked_patients
		AND CAST(NOW() AS time) < "end";
	;`;
	const values = [d_id];
	try {
		const client = await pool.connect();
		const result = await client.query(query, values);
		client.release();
		// console.log(result.rows)
		return result.rows;
	} catch (error) {
		console.error(error);
	}
};

// get_doctor_slots(1)

module.exports = get_doctor_slots;
