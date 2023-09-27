const pool = require("../../config/connect_db");

const update_appointments = async () => {
	const updateQuery = `
    UPDATE appointments
    SET status = -1
    WHERE status = 0
    AND start > NOW();
  `;
	try {
		const client = await pool.connect();
		await client.query(updateQuery);
		client.release();
		console.log("Old appointments cancelled!");
	} catch (error) {
		console.error(error);
	}
};

update_appointments()

module.exports = update_appointments;