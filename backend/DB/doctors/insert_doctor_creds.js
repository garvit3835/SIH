const pool = require("../../config/connect_db");

const insert_doctor_creds = async (doctor, username, password) => {
	const query = `INSERT INTO doctor_creds (doctor, username, password)
  VALUES ($1, $2, $3);
  `;
	const values = [doctor, username, password];
	try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    return result;
  } catch (error) {
    console.error('Error creating table:', error);
  }
};

module.exports = insert_doctor_creds;