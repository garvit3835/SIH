const pool = require("../../config/connect_db");

const update_doctor_slots = async () => {
	const today = new Date();
	const midnightToday = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate()
	);

	const updateQuery = `
        UPDATE doctor_slots
        SET start = start + interval '7 days'
        WHERE is_repeat = true AND start < NOW();
      `;

	const deleteQuery = `
        DELETE FROM doctor_slots
        WHERE is_repeat = false AND start < NOW();
      `;
	try {
		const client = await pool.connect();
		await client.query(updateQuery);
		await client.query(deleteQuery);
		client.release();
		console.log("Old doctor slots deleted/updated!");
	} catch (error) {
		console.error(error);
	}
};

update_doctor_slots()

module.exports = update_doctor_slots;
