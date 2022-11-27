import {Box, Heading, Input, Button} from "@chakra-ui/react";

const Signup = () => {
	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<Box
			height={"100vh"}
			bgGradient="linear(red.100 0%, yellow.100 85%)"
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
				<form onSubmit={onSubmit}>
					<Input
						placeholder="First Name"
						bg={"black.100"}
						size="md"
						width="auto"
						m={2}
					/>
					<Input
						m={2}
						placeholder="Last Name"
						bg={"black.100"}
						width="auto"
						size="md"
					/>
					<Input
						m={2}
						placeholder="Email"
						bg={"black.100"}
						width="auto"
						size="md"
					/>
					<Input
						m={2}
						placeholder="Password"
						bg={"black.100"}
						width="auto"
						size="md"
					/>
					<Input
						m={2}
						placeholder="Password again"
						bg={"black.100"}
						width="auto"
						size="md"
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
