const express = require("express");
const bodyparser = require("body-parser");
var cors = require("cors");

module.exports.createExpressApp = () => {
	var allowedOrigins = ["http://localhost:3000"];
	const app = express();

	app.use(express.json());

	app.use(express.urlencoded({extended: false}));

	// app.use((req, res, next) => {
	// 	res.setHeader("Access-Control-Allow-Origin", "*");
	// 	res.setHeader(
	// 		"Access-Control-Allow-Methods",
	// 		"GET,PUT,PATCH,POST,DELETE,OPTIONS"
	// 	);
	// 	res.setHeader("Access-Control-Allow-Headers", "*");

	// 	next();
	// });

	app.use(cors());

	app.use(bodyparser.json({limit: "1000mb"}));
	app.use(
		bodyparser.urlencoded({
			limit: "1000mb",
			extended: true,
		})
	);

	app.use(
		cors({
			origin: function (origin, callback) {
				// allow requests with no origin
				// (like mobile apps or curl requests)
				if (!origin) return callback(null, true);
				if (allowedOrigins.indexOf(origin) === -1) {
					var msg =
						"The CORS policy for this site does not " +
						"allow access from the specified Origin.";
					return callback(new Error(msg), false);
				}
				return callback(null, true);
			},
		})
	);

	return app;
};
