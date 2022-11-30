import {base_url} from "./url_service";

export const create_acount = async ({
	fname,
	lname,
	email,
	password,
	passwordConfirmation,
}) => {
	if (password !== passwordConfirmation) return "Passwords don't match";

	let headersList = {
		Accept: "*/*",
		"Content-Type": "application/json",
	};

	let bodyContent = JSON.stringify({
		fname,
		lname,
		email,
		password,
	});

	let response = await fetch("http://localhost:8080/api/account/creation/", {
		method: "POST",
		body: bodyContent,
		headers: headersList,
	});

	let data = await response;
	console.log(data);
	return data;
};
