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
	try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};

module.exports = create_appointment;
