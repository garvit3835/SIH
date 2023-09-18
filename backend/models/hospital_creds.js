const pool = require("../config/connect_db")

const hospital_credsTable = async () => {
	const query = `CREATE TABLE hospital_creds (
    hospital integer PRIMARY KEY REFERENCES hospitals(h_id),
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