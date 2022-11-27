// 1. Import `extendTheme`
import {extendTheme} from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
	colors: {
		red: {
			100: "#F3A5B9",
			200: "#EE819C",
			300: "#EB6F8E",
			400: "#E95D80",
			500: "#E5446D", //Key
			600: "#C51B46",
			700: "#A21639",
			800: "#7E112C",
			900: "#5A0C20",
		},
		black: {
			100: "#F5F4F5",
			200: "#ebe9ec",
			300: "#99939F",
			400: "#5C5661",
			500: "#353238", //Key
			600: "#29226B",
			700: "#1F1D20",
			800: "#141316",
			900: "#0A0A0B",
		},
		blue: {
			100: "#8530FF",
			200: "#5CD6FF",
			300: "#33CCFF",
			400: "#0AC2FF",
			500: "#00A7E1", //Key
			600: "#008AB8",
			700: "#007AA3",
			800: "#005C7A",
			900: "#004D66",
		},
		yellow: {
			100: "#FBEFC5",
			200: "#F9E49F",
			300: "#F8DF8C",
			400: "#F5D466",
			500: "#F3CA40", //Key
			600: "#d3a50d",
			700: "#735a07",
			800: "#604b06",
			900: "#866909",
		},
	},
	// fonts: {
	// 	body: "system-ui, sans-serif",
	// 	heading: "Georgia, serif",
	// 	mono: "Menlo, monospace",
	// },
});

export default theme;
