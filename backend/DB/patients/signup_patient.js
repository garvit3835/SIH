const pool = require("../../config/connect_db");

const signup_patient = async (name, number, gender, family, address, latitude, longitude) => {
	const query = `INSERT INTO patients (name, number, gender, family, address, latitude, longitude)
  VALUES ($1, $2, $3, $4, $5, $6, $7);
  `;
	const values = [name, number, gender, family, address, latitude, longitude];
	try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    return ({success: "Patient Details Added!"})
  } catch (error) {
    console.error(error);
  }
};
// signup_patient("AK", 12345634590, "female", 5, "delhi", 34, -45.987)


module.exports = signup_patient;