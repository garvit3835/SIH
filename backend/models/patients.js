const pool = require("../config/connect_db")

const patientTable = async () => {
	const query = `CREATE TABLE patients (
    p_id serial PRIMARY KEY,
    name text,
    number bigint,
    family integer REFERENCES patients(p_id),
    policy text,
    address text,
    latitude numeric(4,2),
    longitude numeric(5,2),
    diseases text[]
);`;
	await pool.connect();
	try {
		await pool.query(query);
	} finally {
		await pool.end();
	}
};
