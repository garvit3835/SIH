const pool = require("../../config/connect_db");

const insert_doctor_creds = async (username, password) => {
	const query = `INSERT INTO doctor_creds (username, password)
  VALUES ($1, $2);`;
	const values = [username, password];
	try {
		const client = await pool.connect();
		const result = await client.query(query, values);
    client.release();
		return ({success: "Doctor credentials added!"})
	} catch (error) {
		console.error(error);
	}
};

// insert_doctor_creds('', '')
// insert_doctor_creds('garvit123', 'test')

module.exports = insert_doctor_creds;
