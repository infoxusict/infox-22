import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
	return (
		<div className="glass-bg">
			<h3 className="banner-text text-xs md:text-lg md:pb-2">
				Event registrations are live.{" "}
				<Link to="/events" className="form-link">
					Click Here to Register
				</Link>
			</h3>
		</div>
	);
}
