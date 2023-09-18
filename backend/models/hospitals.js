const pool = require("../config/connect_db")

const hospitalsTable = async () => {
	const query = `CREATE TABLE hospitals (
    h_id serial PRIMARY KEY,
    name text,
    number bigint,
    address text,
    latitude numeric(4,2),
    longitude numeric(5,2)
);
`;
	await pool.connect();
	try {
		await pool.query(query)
	} finally {
		await pool.end();
	}
};
