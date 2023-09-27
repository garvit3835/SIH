const pool = require("../../config/connect_db");

const decrement_slot_bookings = async (s_id) => {
  const updateQuery =
			"UPDATE doctor_slots SET booked_patients = booked_patients - 1 WHERE s_id = $1";
	try {
		const client = await pool.connect();
		const result = await client.query(updateQuery, [s_id]);
		client.release();
		return result;
	} catch (error) {
		console.error(error);
	}
};

// decrement_slot_bookings(5)

module.exports = decrement_slot_bookings;
