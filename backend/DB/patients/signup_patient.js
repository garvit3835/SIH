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
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};



module.exports = signup_patient;