const pool = require("../../config/connect_db");

const insert_hospital_creds = async (username, password) => {
	const query = `INSERT INTO hospital_creds (username, password)
  VALUES ($1, $2);
  `;
	const values = [username, password];
	try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    return ({success: "Hospital credentails Registered!"})
  } catch (error) {
    console.error(error);
  }
};

// insert_hospital_creds("max123", "test");

module.exports = insert_hospital_creds;