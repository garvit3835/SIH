const cron = require("node-cron");
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
        WHERE is_repeat = true AND start < $1;
      `;

	const deleteQuery = `
        DELETE FROM doctor_slots
        WHERE is_repeat = false AND start < $1;
      `;
	try {
		const client = await pool.connect();
		await client.query(updateQuery, [midnightToday]);
		await client.query(deleteQuery, [midnightToday]);
		client.release();
		console.log("Old doctor slots deleted/updated!");
	} catch (error) {
		console.error(error);
	}
};

cron.schedule("0 0 * * *", () => {
	update_doctor_slots();
});
