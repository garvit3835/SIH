const pool = require("../../config/connect_db");
const decrement_slot_bookings = require("../doctors/decrement_slot_bookings");

const change_appointment_status = async (status, a_id, s_id) => {
	const query = `UPDATE appointments SET status = $1 WHERE a_id = $2;`;
	const values = [status, a_id];
  try {
    // if (status == -1) {
    //   await decrement_slot_bookings(s_id)
    // }
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    return ({sucess: "status changed!"})
  } catch (error) {
    console.error(error);
  }
};

// change_appointment_status(-1, 2, 6)

module.exports = change_appointment_status;