import Hero from "./components/hero/hero";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
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
      <Portfolio />
      <section id="#contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
