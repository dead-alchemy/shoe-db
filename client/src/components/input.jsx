import {
	Box,
	FormControl,
	Input as CHInput,
	FormLabel,
	FormErrorMessage,
} from "@chakra-ui/react";

const Input = (props) => {
	return (
		<Box m={2}>
			<FormControl isInvalid={props.error}>
				<FormLabel fontSize="lg" fontWeight={500} m={0}>
					{props.label}
				</FormLabel>
				<CHInput
					placeholder={props.placeholder}
					name={"fname"}
					bg={"black.100"}
					onChange={props.handleChange}
					value={props.value}
					{...props}
				/>
				<FormErrorMessage>{props.error}</FormErrorMessage>
			</FormControl>
		</Box>
	);
};

export default Input;
