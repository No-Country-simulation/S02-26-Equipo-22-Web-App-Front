import Filter from "@/_component/filters/data-filter";
import Categories from "@/_component/landing/Categories";
import Footer from "@/_component/landing/Footer";
import Header from "@/_component/landing/Header";
import Hero from "@/_component/landing/Hero";
import HorseGrid from "@/_component/landing/HorseGrid";

const page = () => {
  return (
    <div className="min-h-screen bg-[#F4F1EC] font-sans">
      <Header />
      <Hero />
      <main>
        <Categories />
        <Filter/>
        <div className="space-y-4">
          <HorseGrid title="Basado en tu última visita" />
         
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
