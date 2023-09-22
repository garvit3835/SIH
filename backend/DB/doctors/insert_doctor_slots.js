const pool = require("../../config/connect_db");

const insert_doctor_slots = async (d_id, slots) => {
	const deleteQuery = `DELETE FROM doctor_slots WHERE doctor = $1`;
  const insertQuery = `INSERT INTO doctor_slots (start_timestamp, end_time, hospital, doctor, booked_patient, total_patient, is_repeat) VALUES $1`
  const deleteValues = [d_id];
  const insertValues = [slots];
	try {
    const client = await pool.connect();
    await client.query(deleteQuery, deleteValues);
    const result = await client.query(insertQuery, insertValues)
    client.release();
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};

module.exports = insert_doctor_slots;