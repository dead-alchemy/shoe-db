const {pool} = require("../connectors/postgres");

const getTest = async () => {
	try {
		const res = await pool.query(`SELECT * FROM public.testing`);
		console.log(res.rows);
		return {
			data: res.rows,
			status: 200,
		};
	} catch (err) {
		// send the error in case something happens.
		console.log(err);
		return {
			data: err.stack,
			status: 500,
		};
	}
};

module.exports = {getTest};
