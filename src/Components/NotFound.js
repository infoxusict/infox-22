import React from "react";
import { Link } from "react-router-dom";
import MatrixRain from "./MatrixRain";

const NotFound = () => {
	return (
		<div className="h-screen flex flex-col items-center justify-evenly">
      <MatrixRain />
			<img src="/404.svg" alt="404" className="w-72 md:w-[30rem] mt-10 md:mt-20" />
			<div>
				<div className="sn_glitch_forNHeading atmosphere text-2xl md:!text-6xl mt-8 md:mt-12">
					<div className="sn_line_forNHeading !mx-auto">Page Not Found</div>
					<div className="sn_line_forNHeading !mx-auto">Page Not Found</div>
					<div className="sn_line_forNHeading !mx-auto">Page Not Found</div>
					<div className="sn_line_forNHeading !mx-auto">Page Not Found</div>
					<div className="sn_line_forNHeading !mx-auto">Page Not Found</div>
					<div className="sn_line_forNHeading !mx-auto">Page Not Found</div>
					<div className="sn_line_forNHeading !mx-auto">Page Not Found</div>
					<div className="sn_line_forNHeading !mx-auto">Page Not Found</div>
					<div className="sn_line_forNHeading !mx-auto">Page Not Found</div>
				</div>
				<button className="mx-auto justify-start flex">
					<Link to="/" className="register teams-btn text-xs">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Home
					</Link>
				</button>
			</div>
		</div>
	);
};

export default NotFound;
