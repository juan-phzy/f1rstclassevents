import Loading from "@/components/Loading";
import HeroPage from "@/components/pages/HeroPage";
import Services from "@/components/pages/Services";
import TeamPage from "@/components/pages/TeamPage";
import BlurNavBar from "@/components/shared/BlurNavBar";
import NavBar from "@/components/shared/NavBar";

export default function Home() {
	return (
		<main className="main-container">
			<BlurNavBar />
			<NavBar />
			<HeroPage />
			<Services />
			{/* <TeamPage /> */}
		</main>
	);
}
