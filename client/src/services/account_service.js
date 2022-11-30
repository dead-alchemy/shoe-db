import {base_url} from "./url_service";

export const create_acount = async ({
	fname,
	lname,
	email,
	password,
	passwordConfirmation,
}) => {
	if (password !== passwordConfirmation) return "Passwords don't match";

	console.log(fname, lname, email, password);

	let headersList = {
		Accept: "*/*",
		"User-Agent": "Thunder Client (https://www.thunderclient.com)",
		"Content-Type": "application/json",
	};

	let bodyContent = JSON.stringify({
		fname,
		lname,
		email,
		password,
	});

	let response = await fetch("http://localhost:8080/api/account/creation", {
		method: "POST",
		body: bodyContent,
		headers: headersList,
	});

	let data = await response.text();
	console.log(data);
	return data;
};
