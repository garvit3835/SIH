const pool = require("../../config/connect_db");
const face_detection = require("../../services/processes/face_detection");

const checkin = async (d_id, h_id) => {
  const face = await face_detection(d_id);

  if (face === "True") {
    const query = `UPDATE doctors SET is_checkedin = $1 WHERE d_id = $2`;
    const values = [h_id, d_id];
    try {
      const client = await pool.connect();
      const result = await client.query(query, values);
      client.release();
      return { success: "Face matched!" };
    } catch (error) {
      console.error(error);
      return { error: "Error updating the database." };
    }
  } else {
    return { error: "Face not detected!" };
  }
};

// const test = async () => {
//   const result = await checkin(1, 1);
//   console.log(result);
// };

// test();

module.exports = checkin;