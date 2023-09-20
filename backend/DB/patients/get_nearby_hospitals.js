const pool = require("../../config/connect_db");

const get_nearby_hospitals = async (p_id) => {
  const query = `SELECT
  h.h_id,
  h.name,
  h.number,
  h.address,
  earth_distance(
      ll_to_earth(h.latitude, h.longitude),
      ll_to_earth(p.latitude, p.longitude)
  ) AS distance
  FROM
    hospitals h
  JOIN
    patients p
  ON
    earth_box(
        ll_to_earth(p.latitude, p.longitude),
        10000000  -- A large distance to encompass the entire Earth's surface
    ) @> ll_to_earth(h.latitude, h.longitude)
  WHERE
    p.p_id = $1
  ORDER BY
    distance
  LIMIT 10;`;
  const values = [p_id];
  try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};
get_nearby_hospitals(1)

module.exports = get_nearby_hospitals;
