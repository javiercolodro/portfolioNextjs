import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-base">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <Header />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
