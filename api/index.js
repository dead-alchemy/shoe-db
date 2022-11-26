const {createExpressApp} = require("./middleware/createExpressApp");

require("dotenv").config({path: "../.env"});

const app = createExpressApp();

const port = process.env["API_PORT"] || 8080;

// public routes
app.use("/api/", require("./routes/example.js"));
app.use("/api/pg", require("./routes/postgress.js"));

app.use((error, req, res, next) => {
	if (res.headerSent) {
		return next(error);
	}

	res.status(error.code || 500);
	res.json({message: error.message || "An Unknown Error has Occured"});
});

app.listen(port, () => {
	console.log(`api-server listening at http://localhost:${port}`);
});
