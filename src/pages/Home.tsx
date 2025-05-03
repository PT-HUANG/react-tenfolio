import {
  Navbar,
  FirstView,
  About,
  Projects,
  Resume,
  FAQ,
  Contact,
} from "@/components";

function Home() {
  return (
    <>
      <Navbar />
      <FirstView />
      <About />
      <Projects />
      <Resume />
      <FAQ />
      <Contact />
    </>
  );
}

export default Home;
