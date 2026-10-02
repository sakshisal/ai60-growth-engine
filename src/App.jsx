import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import BuildSection from "./components/BuildSection";
import HowItWorks from "./components/HowItWorks";
import FinalCTA from "./components/FinalCTA";
import RegistrationModal from "./components/RegistrationModal";
import Registrations from "./components/Registrations";
import GrowthDashboard from "./components/GrowthDashboard";

function App() {
  useEffect(() => {
    const hash = window.location.hash;

    const refMatch = hash.match(/[?&]ref=([^&]+)/);

    if (refMatch) {
      const referralCode = decodeURIComponent(refMatch[1]);

      sessionStorage.setItem("ai60Referral", referralCode);

      console.log("Referral captured:", referralCode);
    }
  }, []);

  const [registrationOpen, setRegistrationOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(
    window.location.hash
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (currentPage === "#growth-dashboard") {
    return <GrowthDashboard />;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816]">

      <Navbar
        onRegister={() => setRegistrationOpen(true)}
      />

      <Hero
        onRegister={() => setRegistrationOpen(true)}
      />

      <StatsStrip />

      <Registrations />

      <BuildSection />

      <HowItWorks />

      <FinalCTA
        onRegister={() => setRegistrationOpen(true)}
      />

      <RegistrationModal
        isOpen={registrationOpen}
        onClose={() => setRegistrationOpen(false)}
      />

    </main>
  );
}

export default App;