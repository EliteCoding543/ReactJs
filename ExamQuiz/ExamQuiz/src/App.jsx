import { useState } from "react";
import Navbar from "./Components/Navbar";
import SideNavbar from "./Components/SideNavbar";
import Home from "./Components/Pages/Home";

function App() {
  // Default Sidebar Closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <SideNavbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;