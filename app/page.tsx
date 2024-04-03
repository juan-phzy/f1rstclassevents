import HeroPage from "@/components/pages/HeroPage";
import NavBar from "@/components/shared/NavBar";

export default function Home() {
	return (
		<main className="main-container">
			<NavBar />
			<HeroPage />
		</main>
	);
}
