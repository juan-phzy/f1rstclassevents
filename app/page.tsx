import HeroPage from "@/components/pages/HeroPage";
import Services from "@/components/pages/Services";
import NavBar from "@/components/shared/NavBar";

export default function Home() {
	return (
		<main className="main-container">
			<NavBar />
			<HeroPage />
			<Services />
		</main>
	);
}
