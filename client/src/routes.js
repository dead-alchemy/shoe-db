import {App, Login, Signup} from "./pages/index.js";

import {createBrowserRouter} from "react-router-dom";

// {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
]);

export default router;
