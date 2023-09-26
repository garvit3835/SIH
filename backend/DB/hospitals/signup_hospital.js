const pool = require("../../config/connect_db");

const signup_hospital = async (h_id, name, number, address, latitude, longitude) => {
	const query = `INSERT INTO hospitals (h_id, name, number, address, latitude, longitude)
  VALUES ($1, $2, $3, $4, $5, $6);
  `;
	const values = [h_id, name, number, address, latitude, longitude];
	try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    return ({success: "Hospital details added!"})
  } catch (error) {
    console.error(error);
  }
};

// signup_hospital(2, 'MrAX', 234342, 'test', -33.435, 38)

module.exports = signup_hospital;