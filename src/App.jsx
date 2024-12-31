import Hero from "./components/hero/hero";
import Services from "./components/services/services";
import CompPortfolio from "./components/portfolio/compportfolio/compportfolio";
import WebPortfolio from "./components/portfolio/webportfolio/webdevelopmentportfolio";
import MobilePortfolio from "./components/portfolio/mobileportfolio/mobileportfolio";
import ResearchPortfolio from "./components/portfolio/researchportfolio/researchportfolio";
import Contact from "./components/contact/contact";
const App = () => {
  return (
    <div className="container">
      {/* container is class name for all components (used for css formatting)*/}
      <section id="#home">
        {" "}
        {/*Sections are created for each component for identification in css styling*/}
        <Hero />
      </section>
      <section id="#services">
        <Services />
      </section>
      <div id="web-portfolio">
        <WebPortfolio />
      </div>
      <div id="mobile-portfolio">
        <MobilePortfolio />
      </div>
      <div id="research-portfolio">
        <ResearchPortfolio />
      </div>
      <div id="comp-portfolio">
        <CompPortfolio />
      </div>
      <section id="#contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
