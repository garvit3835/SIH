const pool = require("../../config/connect_db");

const insert_patient_creds = async (patient, username, password) => {
	const query = `INSERT INTO patient_creds (patient, username, password)
  VALUES ($1, $2, $3);
  `;
	const values = [patient, username, password];
	try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};

module.exports = insert_patient_creds;