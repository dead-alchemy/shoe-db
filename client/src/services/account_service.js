import {base_url} from "./url_service";

export const create_acount = ({
	fname,
	lname,
	email,
	password,
	passwordConfirmation,
}) => {
	if (password !== passwordConfirmation) return "Passwords don't match";

	const res = fetch(`${base_url()}/account/creation/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify(fname, lname, email, password),
	});
	return res.json();
};
