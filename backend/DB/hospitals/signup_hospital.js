const pool = require("../../config/connect_db");

const signup_hospital = async (name, number, address, latitude, longitude) => {
	const query = `INSERT INTO hospitals (name, number, address, latitude, longitude)
  VALUES ($1, $2, $3, $4, $5);
  `;
	const values = [name, number, address, latitude, longitude];
	try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    return result;
  } catch (error) {
    console.error('Error creating table:', error);
  }
};

module.exports = signup_hospital;