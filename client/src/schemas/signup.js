import * as Yup from "yup";

export const signUpSchema = Yup.object({
	fname: Yup.string().required("Enter your first name"),
	lname: Yup.string().required("Enter your last name"),
	email: Yup.string()
		.required("We need your email")
		.email("It needs to be an email"),
	password: Yup.string()
		.required("Please Enter your password")
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
			"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
		),
	passwordConfirmation: Yup.string().oneOf(
		[Yup.ref("password"), null],
		"Passwords must match"
	),
});
