const pool = require("../../config/connect_db");

const insert_hospital_creds = async (hospital, username, password) => {
	const query = `INSERT INTO hospital_creds (hospital, username, password)
  VALUES ($1, $2, $3);
  `;
	const values = [hospital, username, password];
	try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};

module.exports = insert_hospital_creds;