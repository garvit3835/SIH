const pool = require("../../config/connect_db");

const get_doctors = async (h_id) => {
	const query = `SELECT
	d.*,
	hd.hospital AS hospital_id
	FROM
		doctors d
	INNER JOIN
		hospital_doctor hd ON d.d_id = hd.doctor
	WHERE
		hd.hospital = $1;
  `;
	const values = [h_id];
	try {
		const client = await pool.connect();
		const result = await client.query(query, values);
		client.release();
		console.log(result.rows);
		return result.rows;
	} catch (error) {
		console.error(error);
	}
};

get_doctors(1)

module.exports = get_doctors;
