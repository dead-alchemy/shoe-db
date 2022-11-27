import {Box, Heading, Button, Center} from "@chakra-ui/react";
import {Link as RRDLink} from "react-router-dom";
import image from "images/ryan-plomp-76w_eDO1u1E-unsplash.jpg";

const App = () => {
	return (
		<Box
			//bgGradient="linear(to-br, yellow.100 65%, red.100 99%)"
			backgroundImage={image}
			//height={"100vh"}
			scrollBehavior="smooth"
			p={4}
			height={"100vh"}
			backgroundRepeat={"no-repeat"}
			backgroundPosition={"center"}
			backgroundSize={"cover"}
		>
			<Button
				bg={"blue.500"}
				color={"yellow.500"}
				textShadow="1px 1px #E5446D"
				textAlign={"right"}
				as={RRDLink}
				to={"login"}
			>
				Login
			</Button>
			<Box
				pl={"2rem"}
				pr={"2rem"}
				pt={".5rem"}
				pb={".5rem"}
				borderRadius={8}
				m={2}
				textShadow="1px 1px #E5446D"
			>
				<Heading color={"blue.200"} textAlign={"center"} size="3xl">
					Welcome to the Shoe DB
				</Heading>
			</Box>

			<Center>
				<Box pl={"2rem"} pr={"2rem"} borderRadius={8} m={2}>
					<Heading
						color={"yellow.600"}
						textAlign={"center"}
						mt={"10rem"}
						as={"h2"}
						size="2xl"
						textShadow="1px 2px #E5446D"
					>
						The One Place To Keep Track of Your Kicks
					</Heading>
				</Box>
			</Center>

			<Center>
				<Box pl={"2rem"} pr={"2rem"} borderRadius={8} m={2}>
					<Button
						bg={"blue.500"}
						color={"yellow.500"}
						textShadow="1px 1px #E5446D"
						textAlign={"center"}
						mt={"15rem"}
						as={RRDLink}
						to={"signup"}
					>
						Sign Up
					</Button>
				</Box>
			</Center>
		</Box>
	);
};

export default App;
