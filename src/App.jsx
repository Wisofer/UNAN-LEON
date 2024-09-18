import React from "react";
import Layout from "./layouts/Layouts";
import Aulas from "./components/Aulas";
import Wifi from "./components/Wifi";
import InteractionSection from "./components/InteractionSection";
import SupportSection from "./components/SupportSection";
import unan from "../public/img/escudo.png";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1">
        <Aulas />
        <Wifi />
        <InteractionSection />
        <SupportSection />
      </main>
    </div>
  );
}

export default App;
