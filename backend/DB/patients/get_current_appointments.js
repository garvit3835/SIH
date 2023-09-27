const pool = require("../../config/connect_db");

const get_current_appointments = async (p_id) => {
	const query = `SELECT
    a.*,
    d.name AS doctor_name,
    d.number AS doctor_number,
    d.specialization,
    d.rating,
    h.name AS hospital_name,
    h.number AS hospital_number,
    h.address AS hospital_address
  FROM
    (
        SELECT *
        FROM appointments
        WHERE patient = $1
        AND status = 0
    ) AS a
  JOIN
    doctors d ON a.doctor = d.d_id
  JOIN
    hospitals h ON a.hospital = h.h_id
  `;
	const values = [p_id];
	try {
		const client = await pool.connect();
		const result = await client.query(query, values);
    client.release();
    // console.log(result.rows)
		return result.rows;
	} catch (error) {
		console.error(error);
	}
};

// get_current_appointments(1)

module.exports = get_current_appointments;
