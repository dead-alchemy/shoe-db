import {Box, Heading, Button} from "@chakra-ui/react";
import {Input} from "components/index.js";
import image from "images/riyan-ong-j1PxAa2U-T4-unsplash.jpg";
import {useFormik} from "formik";
import {signUpSchema} from "schemas";

import {create_acount} from "services/account_service";

const Signup = () => {
	const formik = useFormik({
		initialValues: {
			fname: "",
			lname: "",
			email: "",
			password: "",
			passwordConfirmation: "",
		},
		validationSchema: signUpSchema,
		onSubmit: (values) => {
			const response = create_acount(values);
			console.log(response);
		},
	});

	return (
		<Box
			height={"100vh"}
			bgGradient="linear(red.100 0%, yellow.100 85%)"
			backgroundImage={image}
			backgroundRepeat={"no-repeat"}
			backgroundPosition={"center"}
			backgroundSize={"cover"}
			p={2}
		>
			<Box>
				<Heading
					size="2xl"
					bg={"red.700"}
					m={2}
					p={3}
					borderRadius={16}
					color={"black.200"}
					textShadow="1px 3px #00A7E1"
					boxShadow={"lg"}
				>
					Let's get you started
				</Heading>
			</Box>

			<Box>
				<form onSubmit={formik.handleSubmit}>
					<Input
						name={"fname"}
						label="First Name"
						onChange={formik.handleChange}
						value={formik.values.fname}
						error={formik.errors.fname}
					/>
					<Input
						name={"lname"}
						label="Last Name"
						onChange={formik.handleChange}
						value={formik.values.lname}
						error={formik.errors.lname}
					/>
					<Input
						name={"email"}
						label="Email Address"
						type={"email"}
						onChange={formik.handleChange}
						value={formik.values.email}
						error={formik.errors.email}
					/>
					<Input
						name={"password"}
						type={"password"}
						label="Password"
						onChange={formik.handleChange}
						value={formik.values.password}
						error={formik.errors.password}
					/>
					<Input
						name={"passwordConfirmation"}
						type={"password"}
						label="Password Again"
						onChange={formik.handleChange}
						value={formik.values.passwordConfirmation}
						error={formik.errors.passwordConfirmation}
					/>

					<Box>
						<Button bg={"green.200"} float="right" type={"submit"}>
							Let's Goooo!!!!
						</Button>
					</Box>
				</form>
			</Box>
		</Box>
	);
};

export default Signup;
