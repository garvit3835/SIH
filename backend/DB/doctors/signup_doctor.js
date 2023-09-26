const pool = require("../../config/connect_db");

const signup_doctor = async (d_id, name, number, latitude, longitude, specialization, rating) => {
	const query = `INSERT INTO doctors (d_id, name, number, latitude, longitude, specialization, rating)
  VALUES ($1, $2, $3, $4, $5, $6, $7);
  `;
	const values = [d_id, name, number, latitude, longitude, specialization, rating];
	try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    return ({success: "Doctor details added!"})
  } catch (error) {
    console.error(error);
  }
};

// signup_doctor(3, 'ansh', 33443, 53, 14, 2, 4.5)


module.exports = signup_doctor;