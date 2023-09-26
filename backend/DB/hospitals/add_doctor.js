const pool = require("../../config/connect_db");
const get_doctor_creds = require("../doctors/get_doctor_creds");

const add_doctors = async (h_id, d_username) => {
	const data = await get_doctor_creds(d_username);
	if (data.length != 0) {
		const query = `INSERT INTO hospital_doctor(hospital, doctor) VALUES ($1, $2)`;
		const values = [h_id, data.d_id];
		try {
			const client = await pool.connect();
			const result = await client.query(query, values);
			client.release();
			// console.log(result.rows);
			return ({success: "Doctor added!"})
		} catch (error) {
			console.error(error);
		}
  } else {
    return ({error: "Doctor does not exist, register it as a new doctor."})
  }
};

// add_doctors(4, 'garvit123')

module.exports = add_doctors;
