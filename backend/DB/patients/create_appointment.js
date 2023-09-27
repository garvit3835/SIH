const pool = require("../../config/connect_db");
const mail_appointment_details = require("../../services/emails/mail_appointment_details");
const increment_slot_bookings = require("../doctors/increment_slot_bookings");
const get_creds_by_id = require("./get_creds_by_id");
// const get_patient = require("./get_patient");

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
	if (result) {
		console.log(result)
		const query =
			`WITH record AS (INSERT INTO appointments (patient, doctor, hospital, description, start, is_emergency, status, prescription, slot) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *)
			SELECT * FROM record;
		`;
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
			const result2 = await client.query(query, values);
			console.log(result2.rows[0])
			client.release();
			const patient = await get_creds_by_id(p_id);
			console.log(patient.username)
			await mail_appointment_details(patient.username, JSON.stringify(result2.rows[0]))
			return ({success: "Appointment created!"})
		} catch (error) {
			console.error(error);
		}
	} else {
		return ({error: "Slot already full!"})
	}
};

create_appointment(1, 3, 4, "test4", new Date(), 5, 0, null, 5)

module.exports = create_appointment;
