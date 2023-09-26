const pool = require("../../config/connect_db");

const get_patient = async (p_id) => {
	const query = `SELECT * FROM patients WHERE p_id = $1 LIMIT 1;
  `;
	const values = [p_id];
	try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    // console.log(result.rows[0])
    return result.rows[0];
  } catch (error) {
    console.error(error);
  }
};

// get_patient(2)

module.exports = get_patient;