const pool = require("../../config/connect_db");
const increment_slot_bookings = require("../doctors/increment_slot_bookings");

const create_appointment = async (
	p_id,
	d_id,
	h_id,
	description,
	time,
	is_emergency,
	status,
	prescription,
	s_id
) => {
	const result = await increment_slot_bookings(s_id);
	if (result.sucess) {
		const query =
			"INSERT INTO appointments (patient, doctor, hospital, description, time, is_emergency, status, prescription, slot) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
		const values = [
			p_id,
			d_id,
			h_id,
			description,
			time,
			is_emergency,
			status,
			prescription,
			s_id,
		];
		try {
			const client = await pool.connect();
			const result = await client.query(query, values);
			client.release();
			return result.rows;
		} catch (error) {
			console.error(error);
		}
	} else {
		return ({error: "Slot already full!"})
	}
};

module.exports = create_appointment;
