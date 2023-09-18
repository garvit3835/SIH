const pool = require("../config/connect_db");

const hospital_credsTable = async () => {
	const query = `CREATE TABLE hospital_doctor (
    r_id serial PRIMARY KEY,
    hospital integer REFERENCES hospitals(h_id),
    doctor integer REFERENCES doctors(d_id)
);`;
	await pool.connect();
	try {
		await pool.query(query);
	} finally {
		await pool.end();
	}
};
