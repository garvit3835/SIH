const pool = require("../../config/connect_db");

const increment_slot_bookings = async (s_id) => {
  const selectQuery = `SELECT booked_patients, max_patients FROM doctor_slots WHERE s_id = $1`;
  try {
    const client = await pool.connect();
    const { rows } = await client.query(selectQuery, [s_id]);
    const slot = rows[0];
    client.release();

    if (slot) {
      if (slot.booked_patients < slot.max_patients) {
        const updateQuery = 'UPDATE doctor_slots SET booked_patients = booked_patients + 1 WHERE s_id = $1';
        const result = await client.query(updateQuery, [s_id]);
        return { success: "Appointment added to slot!" };
      } else {
        return { error: "Slot Completely Booked!" };
      }
    } else {
      return { error: "Slot not found!" };
    }
  } catch (error) {
    console.error(error);
  }
}


// increment_slot_bookings(5)

module.exports = increment_slot_bookings;