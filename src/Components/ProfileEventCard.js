import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import EditTeam from "./EditTeam";

const ProfileEventCard = ({ event }) => {
	const [eventObj, setEventObj] = useState(event);
	const [showModal, setShowModal] = useState(false);

	const editHandler = () => {
		setShowModal(true);
		document.body.style.overflow = "hidden";
	};
	const closeModal = () => {
		setShowModal(false);
		document.body.style.overflow = "scroll";
	};
	const editTeamHandler = (teamName, teamMembers) =>
		new Promise((resolve, reject) => {
			fetch(`${process.env.REACT_APP_BACKEND_URL}team/edit`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
					authToken: localStorage.getItem("authkey"),
				},
				body: JSON.stringify({
					teamId: event._id,
					teamName,
					members: teamMembers,
					key: "<h1>Newprogrammakinginprogress</h1>",
				}),
			})
				.then((res) => res.json())
				.then((res) => {
					if (res.success) {
						setEventObj(res.team);
            closeModal()
						resolve(toast.success("Team updated successfully"));
					} else {
						reject(toast.error("Unknow Error Occured"));
					}
				})
				.catch((err) => {
          console.log(err)
          reject(toast.error("Unknow Error Occured"))
        });
		});

	return (
		<div
			className="card"
			style={{
				backgroundImage: `url(${eventObj.eventId.eventPic})`,
				backgroundSize: "cover",
			}}
			cursor="pointer"
		>
			<EditTeam
				showModal={showModal}
				closeModal={closeModal}
				team={eventObj}
				editTeamHandler={editTeamHandler}
			/>
			<div className="content">
				<h2 className="title">{eventObj.eventId.eventName}</h2>
				{eventObj.teamName}
				<br />
				<div>
					{eventObj.teamId}
					<button
						className="copybutton"
						style={{ display: "inline", padding: "0px 0px 0px 10px" }}
						onClick={() => {
							navigator.clipboard.writeText(eventObj.teamId);
							toast.success("Copied to clipboard");
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-clipboard-check"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
							/>
							<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
							<path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
						</svg>
					</button>
				</div>
				<p className="copy">
					{eventObj.teamLead}
					<br />
					{eventObj.members.map((item) => {
						return <p>{item}</p>;
					})}
				</p>
				<div className="flex items-center justify-between">
					<Link className="btn" to={`/event/${eventObj.eventId.eventId}`}>
						More Info
					</Link>
					<button className="btn" onClick={editHandler}>
						Edit Team
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProfileEventCard;
