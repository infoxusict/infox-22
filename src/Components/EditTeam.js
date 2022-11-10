import React, { useState } from "react";
import toast from "react-hot-toast";

const mem = ["jainabhishek7204@gmail.com", "abh7204@gmail.com"];

const EditTeam = ({ showModal, closeModal, team, editTeamHandler }) => {
	const [teamName, setTeamName] = useState(team?.teamName || "");
	const [teamMembers, setTeamMembers] = useState(team?.members || []);
	const [loading, setLoading] = useState(false);

	const removeMember = (idx) => {
		let temp = [...teamMembers];
		temp.splice(idx, 1);
		setTeamMembers(temp);
	};

	const saveHandler = () => {
		setLoading(true);
		if (teamName === team.teamName && teamMembers === team.members) {
			setLoading(false);
			toast.error("No changes made");
			return;
		}
		editTeamHandler(teamName, teamMembers).finally(() => setLoading(false));
	};
	return (
		showModal && (
			<div className="fixed z-[2001] top-0 left-0 w-screen h-screen grid place-items-center">
				<div className="bg-white/10 p-4 rounded-lg shadow-md max-w-[400px] w-11/12 z-10 relative">
					<button className="close-modal" onClick={closeModal}>
						&times;
					</button>
					<h1 className="atmosphere text-white md:text-2xl text-center mt-2 mb-4">Edit Team</h1>
					<div className="grid grid-cols-5 my-2">
						<p className="font-semibold col-span-2 text-[#2f2]">Team Name: </p>
						<input
							className="col-span-3 w-full border-none outline-none px-2 py-1 rounded-lg text-black"
							type="text"
							placeholder="Team Name"
							required
							value={teamName}
							onChange={(e) => setTeamName(e.target.value)}
						/>
					</div>
					<h3 className="mt-4 text-center font-semibold text-[#2f2]">Members</h3>
					{teamMembers.length > 0 ? (
						teamMembers.map((member, idx) => (
							<div key={member} className="flex items-center justify-between my-2 mx-4">
								<p className="font-semibold col-span-2 text-white">{member}</p>
								<svg
									onClick={() => removeMember(idx)}
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-trash3 text-[#2f2]/60 active:text-[#2f2] cursor-pointer"
									viewBox="0 0 16 16"
								>
									<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
								</svg>
							</div>
						))
					) : (
						<p className="font-semibold col-span-2 text-white">No Team Member</p>
					)}
					<button
						onClick={saveHandler}
						disabled={loading}
						className="mt-3 border border-[#2f2] rounded-lg text-white atmosphere text-sm font-bold text-center p-2 mx-auto"
					>
						{loading ? "Saving" : "Save Changes"}
					</button>
				</div>
				<div className="overlay" onClick={closeModal} />
			</div>
		)
	);
};

export default EditTeam;
