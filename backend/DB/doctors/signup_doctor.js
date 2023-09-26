const pool = require("../../config/connect_db");

const signup_doctor = async (d_id, name, number, latitude, longitude, specialization, rating, is_checkedin) => {
	const query = `INSERT INTO doctors (d_id, name, number, latitude, longitude, specialization, rating, is_checkedin)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
  `;
	const values = [d_id, name, number, latitude, longitude, specialization, rating, is_checkedin];
	try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};

// signup_doctor(4, 'apurba', 334343, 5, 34, 1, 4.5, 3)

module.exports = signup_doctor;