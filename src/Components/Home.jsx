import Welcome from "./Welcome";
import About from "./About";
import Achievements from "./Achievements";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Contact from "./Contact";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div id="home">
      <Welcome />
      <About />
      <Achievements />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <Newsletter />
    </div>
  );
};

export default Home;
