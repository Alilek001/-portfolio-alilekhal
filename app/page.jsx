"use client";
import { ButtonNav } from "./components/ui";
import {
  SelectedWork,
  MoreWork,
  Hero,
  About,
  Skills,
  Contact,
  Footer,
} from "./pages";

const Home = () => {
  return (
    <main style={{ position: "relative", height: "100%" }}>
      <ButtonNav />
      <Hero id="hero" />
      <div style={{ position: "relative", height: "100%" }}>
        <div style={{ position: "sticky", top: "calc(0vh - 100%)", zIndex: 0 }}>
          <SelectedWork id="works" />
        </div>
        <MoreWork id="morework" />
      </div>
      <About id="about" />
      <div style={{ position: "relative" }}>
        <div style={{ position: "relative", zIndex: 1, height: "100%" }}>
          <Skills id="skills" />
        </div>
        <div
          style={{
            position: "sticky",
            bottom: 0,
            zIndex: 0,
          }}
        >
          <Contact id="contact" />
        </div>
      </div>
      <Footer id="footer" />
    </main>
  );
};

export default Home;
