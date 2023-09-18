const pool = require("../config/connect_db");

const doctorsTable = async () => {
	const query = `CREATE TABLE doctors (
    d_id serial PRIMARY KEY,
    name text,
    number bigint,
    latitude numeric(4,2),
    longitude numeric(5,2),
    specialization integer,
    rating numeric(2,1),
    is_checkedin integer REFERENCES hospitals(h_id)
);`;
	await pool.connect();
	try {
		await pool.query(query);
	} finally {
		await pool.end();
	}
};
