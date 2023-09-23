const pool = require("../config/connect_db")

const doctor_credsTable = async () => {
	const query = `CREATE TABLE doctor_creds (
    doctor integer PRIMARY KEY REFERENCES doctors(d_id),
    username text UNIQUE,
    password text
);
`;
	await pool.connect();
	try {
		await pool.query(query);
	} finally {
		await pool.end();
	}
};