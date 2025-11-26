import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TeamCards from "../components/TeamCards";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <div className="content-bg">
          <TeamCards />
          <About />
        </div>
      </main>
    </>
  );
}

