const pool = require("../../config/connect_db");

const get_doctor_slots = async (d_id) => {
	const query = `SELECT * FROM doctor_slots WHERE doctor = $1`;
  const values = [d_id];
	try {
    const client = await pool.connect();
    const result = await client.query(query, values)
    client.release();
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};

module.exports = get_doctor_slots;