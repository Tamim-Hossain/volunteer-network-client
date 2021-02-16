import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../App";

function PrivateRoute({ children, ...rest }) {
	const [loggedInUser] = useContext(UserContext);
	const { email } = loggedInUser;
	return (
		<Route
			{...rest}
			render={({ location }) =>
				email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
