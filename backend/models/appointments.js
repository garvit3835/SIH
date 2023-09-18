const pool = require("../config/connect_db");

const appointmentsTable = async () => {
	const query = `CREATE TABLE appointments (
    a_id serial PRIMARY KEY,
    patient integer REFERENCES patients(p_id),
    doctor integer REFERENCES doctors(d_id),
    hospital integer REFERENCES hospitals(h_id),
    description text,
    time timestamp,
    is_emergency integer,
    status integer,
    prescription text
);`;
	await pool.connect();
	try {
		await pool.query(query);
	} finally {
		await pool.end();
	}
};

