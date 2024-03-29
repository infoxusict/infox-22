import React, { useEffect, useState } from "react";
import MatrixRain from "./MatrixRain";
import { TiLocation } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";
import { OptimizedImage } from "./OptimizedImage";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../redux/slices/loadingSlice";

const EvenTemp = (props) => {
	const [event, setEvent] = useState({});
	const [localLoading, setLocalLoading] = useState(false);
	const [register, setRegister] = useState(false);
	const [teamCode, setTeamcode] = useState("");
	const [teamName, setTeamName] = useState("");
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startLoading());
		fetch(`${process.env.REACT_APP_BACKEND_URL}event/get_event`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				key: "<h1>Newprogrammakinginprogress</h1>",
				eventId: props.match.params.eventId,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				setEvent(data.event);
			})
			.catch(() => {
				history.replace("/events");
			})
			.finally(() => dispatch(stopLoading()));
		//eslint-disable-next-line
	}, [props.match.params.eventId]);

	const onChangCeode = (event) => {
		setTeamcode(event.target.value);
	};

	const onChangeName = (event) => {
		setTeamName(event.target.value);
	};

	const registerModal = () => {
		if (localStorage.getItem("authkey") === null || localStorage.getItem("authkey") === undefined) {
			history.push("/profile");
			return;
		}
		if (event.teamSize === 1) {
			setLocalLoading(true);
			toast.promise(registerSingle(), {
				loading: "Registering",
				success: (data) => {
					setLocalLoading(false);
					history.push("/profile");
					return data;
				},
				error: (err) => {
					setLocalLoading(false);
					return err;
				},
			});
		} else {
			setRegister(true);
			document.getElementById("getBlur").style.opacity = 0.05;
			document.body.style.overflow = "hidden";
		}
	};

	const registerSingle = () =>
		new Promise(async (resolve, reject) => {
			const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}team/register_single`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authToken: localStorage.getItem("authkey"),
				},
				body: JSON.stringify({
					eventId: event.eventId,
				}),
			});
			const json = await response.json();
			if (json.error) {
				reject(json.error);
			}
			resolve("Registered Successfully");
		});

	const createTeam = () =>
		new Promise(async (resolve, reject) => {
			if (teamName.length < 4) {
				reject("Please enter valid Team Name");
			}
			const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}team/gen_code`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authToken: localStorage.getItem("authkey"),
				},
				body: JSON.stringify({ eventId: event?.eventId, teamName: teamName }),
			});
			const json = await response.json();
			if (json.success === false) {
				reject(json.error);
			}
			navigator.clipboard.writeText(json.team.teamId);
			resolve("Team Id copied to clipboard");
		});

	const joinTeam = () =>
		new Promise(async (resolve, reject) => {
			if (teamCode.length < 5) {
				reject("Please enter valid Team Code");
			}
			const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}team/join`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authToken: localStorage.getItem("authkey"),
				},
				body: JSON.stringify({ eventId: event?.eventId, teamId: teamCode }),
			});
			const json = await response.json();
			if (json.success === false) {
				reject(json.error);
			}
			resolve("Registered Successfully");
		});

	function leave() {
		// var element = document.getElementById("team-modal");
		// window.location.reload();
		setRegister(false);
		document.getElementById("getBlur").style.opacity = 1;
		document.body.style.overflow = "visible";
		// element.style.display = "none";
		// console.log("hehehehehe");
	}

	const createTeamHandle = async (e) => {
		e.preventDefault();
		setLocalLoading(true);
		toast.promise(createTeam(), {
			loading: "Creating Team",
			success: (data) => {
				setLocalLoading(false);
				setRegister(false);
				document.getElementById("getBlur").style.opacity = 1;
				document.body.style.overflow = "scroll";
				history.push("/profile");
				return data;
			},
			error: (err) => {
				setLocalLoading(false);
				setRegister(false);
				document.getElementById("getBlur").style.opacity = 1;
				document.body.style.overflow = "scroll";
				return err;
			},
		});
	};

	const joinTeamHandle = async (e) => {
		e.preventDefault();
		setLocalLoading(true);
		toast.promise(joinTeam(), {
			loading: "Registering",
			success: (data) => {
				setLocalLoading(false);
				setRegister(false);
				document.getElementById("getBlur").style.opacity = 1;
				document.body.style.overflow = "scroll";
				history.push("/profile");
				return data;
			},
			error: (err) => {
				setLocalLoading(false);
				setRegister(false);
				document.getElementById("getBlur").style.opacity = 1;
				document.body.style.overflow = "scroll";
				return err;
			},
		});
	};

	const registerClickHandle = () => {
		if (event?.eventId === "chess1811") {
			window.open("https://forms.gle/zogf1sEPsrBsi3fF7", "_blank");
		} else if (event?.eventId === "djnight") {
			window.open("https://forms.gle/Mbw7woWorTvcn4dU6", "_blank");
		} else {
			registerModal();
		}
	};
	return (
		<>
			<MatrixRain />
			<div className=" container mx-auto text-white md:pt-24">
				{register && (
					<>
						<div className="cont">
							<div id="team-modal" className="container glass paddingg">
								<div id="create-modal">
									<button
										className="cross md:text-xl text-xs absolute md:right-7 md:top-7 right-5 top-5"
										onClick={leave}
									>
										<ImCross />
									</button>
									<h2 className="h2 atmosphere pt-5">Create Team</h2>
									<form id="create-form" onSubmit={createTeamHandle}>
										<input
											type="text"
											id="team-name"
											placeholder="Enter Team Name"
											value={teamName}
											onChange={onChangeName}
										/>
										<button
											disabled={localLoading}
											type="submit"
											className="register team-btn "
											id="create-btn"
										>
											{/* <Link href="https://google.com" className="register team-btn">
                  </Link> */}
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											Create
										</button>
									</form>
								</div>
								{/* {stateName && "bfeif iuregi ehgio4hgo"} */}
								{/* <hr /> */}
								<h2 className="h2 glitch" id="or">
									OR
								</h2>
								<div id="join-modal">
									<h2 className="h2 atmosphere">Join Team</h2>
									<form id="join-form" onSubmit={joinTeamHandle}>
										<input
											type="text"
											id="team-code"
											placeholder="Enter a team code to join"
											value={teamCode}
											onChange={onChangCeode}
										/>
										<button
											disabled={localLoading}
											type="submit"
											className="register team-btn hel"
										>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											Join Team
										</button>
									</form>
								</div>
							</div>
						</div>
					</>
				)}
				<section
					className="  flex flex-col-reverse  md:flex-row md:gap-32  uh-bg  md:pl-24"
					id="getBlur"
				>
					<div className="basis-1/2 mt-8 md:mt-16 ">
						{/* <div className="atmosphere text-7xl">Uhack</div> */}
						<div className="sn_glitch_forNHeading atmosphere uh-heading hidden md:block">
							<div className="sn_line_forNHeading">{event?.eventName}</div>
							<div className="sn_line_forNHeading">{event?.eventName}</div>
							<div className="sn_line_forNHeading">{event?.eventName}</div>
							<div className="sn_line_forNHeading">{event?.eventName}</div>
							<div className="sn_line_forNHeading">{event?.eventName}</div>
							<div className="sn_line_forNHeading">{event?.eventName}</div>
							<div className="sn_line_forNHeading">{event?.eventName}</div>
							<div className="sn_line_forNHeading">{event?.eventName}</div>
							<div className="sn_line_forNHeading">{event?.eventName}</div>
						</div>
						<div className="md:mt-4  text-l mx-8 md:mx-0  text-justify md:max-w-[40%] ">
							{event?.tagline}
							{/*So come up, work on your dreams
                for 24-hours non-stop and make it happen. Make your imaginations
                take out solutions that nobody has ever thought and get involved
                in the heat with some of the best coders of the country. */}
						</div>
						<div className="flex md:mt-16 mt-8 gap-8 txt-shdw text-xl justify-center md:justify-start flex-wrap ">
							<div className="flex gap-2 hel basis-1/3 md:basis-0">
								<svg
									// style="color: #000"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="currentColor"
									className="bi bi-calendar-date"
									viewBox="0 0 16 16"
								>
									{" "}
									<path
										d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"
										fill="white"
									></path>{" "}
									<path
										d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
										fill="white"
									></path>{" "}
								</svg>
								<p className="w-100 justify-content-between"> {event?.date}</p>
							</div>
							<div className="flex gap-2 hel basis-1/3 md:basis-0">
								<svg
									// style="color: white"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="currentColor"
									className="bi bi-clock"
									viewBox="0 0 16 16"
								>
									{" "}
									<path
										d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
										fill="white"
									></path>{" "}
									<path
										d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
										fill="white"
									></path>{" "}
								</svg>
								<p className="w-24 justify-content-between">{event?.time}</p>
							</div>
							<div className="flex gap-2 hel basis-1/3 md:basis-0">
								<TiLocation size={33} className="" />
								<p className="w-100 justify-content-between">{event?.venue}</p>
							</div>
						</div>
						<div className=" devfolio-button flex justify-center md:justify-start ">
							<button
								disabled={localLoading}
								to="/"
								className="register !mt-24 md:!mt-32"
								onClick={registerClickHandle}
							>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								Register
							</button>
						</div>
					</div>
					<div className="basis-1/2 flex justify-center mt-16 md:mt-0 flex-col hel">
						<div>
							<div className="sn_glitch_forNHeading atmosphere uh-heading md:hidden block">
								<div className="sn_line_forNHeading">{event?.eventName}</div>
								<div className="sn_line_forNHeading">{event?.eventName}</div>
								<div className="sn_line_forNHeading">{event?.eventName}</div>
								<div className="sn_line_forNHeading">{event?.eventName}</div>
								<div className="sn_line_forNHeading">{event?.eventName}</div>
								<div className="sn_line_forNHeading">{event?.eventName}</div>
								<div className="sn_line_forNHeading">{event?.eventName}</div>
								<div className="sn_line_forNHeading">{event?.eventName}</div>
								<div className="sn_line_forNHeading">{event?.eventName}</div>
							</div>
						</div>
						<div className="flex justify-center md:justify-center w-full">
							<OptimizedImage
								hashKey={event.eventId}
								src={event?.eventPic}
								alt={event?.eventName}
								className="uh-img  p-4 uh-bg w-4/5 aspect-square"
							/>
							{/* <img
                src={event?.eventPic}
                alt="infox"
                className="uh-img  p-4 uh-bg w-4/5 "
              /> */}
						</div>
					</div>
				</section>
				<div className="flex hel text-4xl md:text-6xl atmosphere title-txt-shdw mt-24 md:mt-32">
					Information
				</div>
				<div className="  uh-bg mt-8 px-4 md:px-12 py-8 mb-16 md:mb-32 pb-16">
					{/* <div className="container mx-auto flex gap-6 flex-col md:flex-row "> */}
					<div className="container mx-auto flex gap-6 flex-col ">
						<div className="basis-1/2 ">
							<h4 className="subheading txt-shdw">About</h4>
							<p>{event?.about}</p>
						</div>
						<div className="basis-1/2">
							{" "}
							<h4 className="subheading txt-shdw">Rules</h4>
							<a
								href={event?.rules}
								target="_blank"
								className="viewrules"
								rel="noopener noreferrer"
							>
								Click here to view rules
							</a>
						</div>
					</div>
					{/* <div className="container mx-auto flex gap-6 flex-col md:flex-row md:mt-7"> */}
					<div className="container mx-auto flex gap-6 flex-col  md:mt-7">
						<div className="basis-2/6">
							<h4 className="subheading txt-shdw">Team Size</h4>
							<p>{event?.teamSize}</p>
						</div>
						<div className="basis-2/6">
							{" "}
							<h4 className="subheading txt-shdw">Prize</h4>
							<ul>{event?.prize}</ul>
						</div>
						<div className="basis-2/6">
							{" "}
							<h4 className="subheading txt-shdw">Contact Us</h4>
							<p>
								{event?.contact?.map((item) => {
									return (
										<li className="list-none" key={item}>
											{item}
										</li>
									);
								})}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default EvenTemp;
