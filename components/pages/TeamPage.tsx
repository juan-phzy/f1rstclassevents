import TeamMemberDisplay from "../TeamMemberDisplay";

const TeamPage = () => {
	return (
		<section className="team-container">
			<div className="team-content">
				<div className="team-title">
					<span>Meet</span>
					<span>The</span>
					<span>Team</span>
				</div>
				<div className="team-body">
					<TeamMemberDisplay />
				</div>
			</div>
		</section>
	);
};

export default TeamPage;
