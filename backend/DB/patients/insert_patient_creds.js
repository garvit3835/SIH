const pool = require("../../config/connect_db");

const insert_patient_creds = async (username, password) => {
	const query = `INSERT INTO patient_creds (username, password)
  VALUES ($1, $2);
  `;
	const values = [username, password];
	try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    return ({success: "Patient Credentials Added!"});
  } catch (error) {
    console.error(error);
  }
};

// insert_patient_creds('garvit1189', 'test1189')

module.exports = insert_patient_creds;