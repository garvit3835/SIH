const pool = require("../../config/connect_db");

const get_family = async (family) => {
	const query = `SELECT * FROM patients WHERE family = $1;
  `;
	const values = [family];
	try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};

module.exports = get_family;