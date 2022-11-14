import React from "react";
import { useSelector } from "react-redux";
import { selectLoading } from "../redux/slices/loadingSlice";

const Loader = () => {
	const isLoading = useSelector(selectLoading);
	return isLoading ? (
		<div className="h-screen w-screen fixed top-0 left-0 flex flex-col items-center justify-center space-y-0 z-[3000] bg-black/70 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60">
			<img src={require("./Assets/Images/aswd.png")} alt="loading" className="animate-pulse" />
			<div className="sn_glitch_forNHeading atmosphere text-2xl md:!text-6xl mt-8 md:mt-12">
				<div className="sn_line_forNHeading">Loading . . .</div>
				<div className="sn_line_forNHeading">Loading . . .</div>
				<div className="sn_line_forNHeading">Loading . . .</div>
				<div className="sn_line_forNHeading">Loading . . .</div>
				<div className="sn_line_forNHeading">Loading . . .</div>
				<div className="sn_line_forNHeading">Loading . . .</div>
				<div className="sn_line_forNHeading">Loading . . .</div>
				<div className="sn_line_forNHeading">Loading . . .</div>
				<div className="sn_line_forNHeading">Loading . . .</div>
			</div>
		</div>
	) : (
		<></>
	);
};

export default Loader;
