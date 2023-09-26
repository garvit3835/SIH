const pool = require("../../config/connect_db");

const get_slots = async (d_id) => {
	const query = `SELECT
  ds.*,
  h.name AS hospital_name,
  h.address AS hospital_address
  FROM
    doctor_slots ds
  JOIN
    hospitals h ON ds.hospital = h.h_id
  WHERE
    ds.doctor = $1;
  `;
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

module.exports = get_slots;