const pool = require("../../config/connect_db");

const get_hospital = async (h_id) => {
	const query = `SELECT * FROM hospitals WHERE h_id = $1 LIMIT 1;
  `;
	const values = [h_id];
	try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    // console.log(result.rows[0])
    return result.rows[0];
  } catch (error) {
    console.error(error);
  }
};

// get_hospital(4)
module.exports = get_hospital;