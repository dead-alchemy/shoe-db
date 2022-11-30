const express = require("express");

const router = express.Router();

const {getTest} = require("../model/account");

module.exports = router.post("/creation/", async (req, res) => {
	const {body} = req;

	console.log(body);

	const {status, data} = await getTest();
	console.log(status);

	if (status === 200) {
		res.send({data: data, rows: data.length});
	} else {
		// add some handling if we get an error back from our model.
		res.status(500);
		res.send("There was an error");
	}
});
