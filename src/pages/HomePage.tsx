// Home page (Landing page).

import Hero from "../components/Hero";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";

function HomePage() {
  return (
    <div>
      <Hero />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
}

export default HomePage;

