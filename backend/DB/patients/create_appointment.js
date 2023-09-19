const pool = require("../../config/connect_db");

const create_appointment = async (
	p_id,
	d_id,
	h_id,
	description,
	time,
	is_emergency,
	status,
	prescription
) => {
	const query =
		"INSERT INTO appointments (patient, doctor, hospital, description, time, is_emergency, status, prescription) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
	const values = [
		p_id,
		d_id,
		h_id,
		description,
		time,
		is_emergency,
		status,
		prescription,
	];
	await pool.connect();
	try {
		await pool.query(query, values);
	} finally {
		await pool.end();
	}
};

module.exports = create_appointment;
