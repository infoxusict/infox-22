import React from "react";
import { useState, useEffect } from "react";

const Keeanu = () => {
	const [scrolled, setScrolled] = useState(0);

	// const [h,setH]=useState("")

	useEffect(() => {
		window.addEventListener("scroll", () => {
			var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			var scrolled1 = ((winScroll + winScroll / 10) / height) * 100;
			var scrolled2 = (winScroll / height) * 100;
			// // console.log("Scrolled2 is" + scrolled2)
			if (Math.ceil(scrolled2) <= 1) {
				// // console.log("Scrolled2 is currently 1")
				if (document.getElementById("keanuimg"))
					document.getElementById("keanuimg").style.animation = "keanumation 4s forwards";
				if (document.getElementById("booth-img"))
					document.getElementById("booth-img").style.animation = "keanumation 4s forwards";
				if (document.getElementById("myBar")) document.getElementById("myBar").style.zIndex = 19;
				setInterval(() => {
					if (document.getElementById("keanuimg"))
						document.getElementById("keanuimg").style.opacity = "100%";
					if (document.getElementById("booth-img"))
						document.getElementById("booth-img").style.opacity = "100%";
				}, 4000);
			}
			if (Math.ceil(scrolled2) >= 90) {
				// // console.log("Scrolled2 is currently 1")
				if (document.getElementById("keanuimg"))
					document.getElementById("keanuimg").style.animation = "keanu_fade 0.5s forwards";
				if (document.getElementById("booth-img"))
					document.getElementById("booth-img").style.animation = "keanu_fade 0.5s forwards";
				if (document.getElementById("myBar")) document.getElementById("myBar").style.zIndex = -1;
				setInterval(() => {
					if (document.getElementById("keanuimg"))
						document.getElementById("keanuimg").style.opacity = "0%";
					if (document.getElementById("booth-img"))
						document.getElementById("booth-img").style.opacity = "0%";
				}, 500);
			}
			if (document.getElementById("myBar"))
				document.getElementById("myBar").style.width = scrolled1 + "%";
			setScrolled(scrolled1);
			// setH(scrolled1)
			// // console.log(scrolled1)
		});
		// return window.removeEventListener("scroll",setH(window.scrollY))
	}, []);

	return (
		<div className="keanudiv">
			{/* <h1 className='keanu-h1'>{h}</h1> */}
			<div id="myBar" style={{ zIndex: "19" }}>
				{Math.ceil(scrolled) % 2 === 0 ? (
					<div id="keanu">
						<img src={require("./Assets/Images/images/matrix-mands1.png")} alt="" id="keanuimg" />
					</div>
				) : (
					<div id="keanu">
						<img
							src={require("./Assets/Images/images/matrix-mands-2.png")}
							alt=""
							id="keanuimg"
						/>
					</div>
				)}
			</div>
			<div className="booth">
				<img
					onClick={() => {
						window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
					}}
					className="booth-img cursor-pointer"
					id="booth-img"
					src={require("./Assets/Images/images/phonebooth.png")}
					alt=""
				/>
			</div>
		</div>
	);
};

export default Keeanu;
