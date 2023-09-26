const pool = require("../../config/connect_db");

const get_nearby_doctors = async (p_id, specialization) => {
	const query = `SELECT
  d.d_id,
  d.name,
  d.number,
  d.latitude,
  d.longitude,
  d.specialization,
  d.rating,
  h.name AS hospital_name,
  h.address AS hospital_address,
  earth_distance(
    ll_to_earth(d.latitude, d.longitude),
    ll_to_earth(p.latitude, p.longitude)
  ) AS distance
  FROM
    doctors d
  JOIN
    hospitals h
  ON
    d.is_checkedin = h.h_id
  JOIN
    patients p
  ON
    earth_box(
      ll_to_earth(p.latitude, p.longitude),
      10000000
    ) @> ll_to_earth(d.latitude, d.longitude)
  WHERE
    p.p_id = $1
    AND d.specialization = $2
  ORDER BY
    distance
  LIMIT 10;

`;
	const values = [p_id, specialization];
	try {
		const client = await pool.connect();
		const result = await client.query(query, values);
		client.release();
		// console.log(result.rows);
		return result.rows;
	} catch (error) {
		console.error(error);
	}
};

// get_nearby_doctors(1, 1);

module.exports = get_nearby_doctors;
