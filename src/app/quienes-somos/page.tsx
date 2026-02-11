import HistoryTimeline from "@/_component/about/HistoryTimeline";
import LocationSection from "@/_component/about/LocationSection";
import HeroAbout from "@/_component/about/HeroAbout";
import MissionVision from "@/_component/about/MissionVision";
import TeamGrid from "@/_component/about/TeamGrid";
import Header from "@/_component/landing/Header";
import Footer from "@/_component/landing/Footer";


export default function QuienesSomos() {
    return (
        <div>
            <Header />
            <main className="flex flex-col gap-10">
                <HeroAbout />
                <MissionVision />
                <HistoryTimeline />
                <TeamGrid />
                <LocationSection />
            </main>
            <Footer />
        </div>
    );
}