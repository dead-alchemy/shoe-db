import App from "./routes/app/App";

import {createBrowserRouter} from "react-router-dom";

// {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },s
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);

export default router;
