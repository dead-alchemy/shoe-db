import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import {ChakraProvider} from "@chakra-ui/react";

import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();
//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	//<React.StrictMode>
	<QueryClientProvider client={queryClient}>
		<ChakraProvider>
			<App />
		</ChakraProvider>
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>
	//</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
