const pool = require("../../config/connect_db");

const get_appointments = async (d_id) => {
  const today = new Date().toISOString().split('T')[0];
	const query = `SELECT
  appointments.*,
  patients.name AS patient_name,
  hospitals.name AS hospital_name,
  hospitals.address AS hospital_address
  FROM
    appointments
  JOIN
    patients ON appointments.patient = patients.p_id
  JOIN
    hospitals ON appointments.hospital = hospitals.h_id
  WHERE
    appointments.doctor = $1
    AND appointments.status = 0
    AND DATE(appointments.start) = $2;
`;
	const values = [d_id, today];
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
// get_appointments(3)

module.exports = get_appointments;
