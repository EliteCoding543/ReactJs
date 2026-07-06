import { useState } from "react";
import Navbar from "./Components/Navbar";
import SideNavbar from "./Components/SideNavbar";
import Home from "./Components/Pages/Home";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className= "min-h-screen bg-slate-50 ">

      <Navbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="flex">
        <SideNavbar isOpen={isOpen} />

        <main className="flex-1 p-8">
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;