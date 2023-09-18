const pool = require("../config/connect_db")

const patient_credsTable = async () => {
	const query = `CREATE TABLE patient_creds (
    patient integer PRIMARY KEY REFERENCES patients(p_id),
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