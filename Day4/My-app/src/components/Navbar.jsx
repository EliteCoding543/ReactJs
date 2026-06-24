function Navbar() {
  return (
    <nav className="flex justify-between items-center px-20 h-16 bg-slate-900 text-white shadow-md">
      <h3 className="font-bold text-2xl text-cyan-400">
        Logo
      </h3>

      <ul className="flex gap-6 font-medium">
        <li className="hover:text-cyan-400 transition duration-300">
          <a href="#">Home</a>
        </li>
        <li className="hover:text-cyan-400 transition duration-300">
          <a href="#">About</a>
        </li>
        <li className="hover:text-cyan-400 transition duration-300">
          <a href="#">Projects</a>
        </li>
        <li className="hover:text-cyan-400 transition duration-300">
          <a href="#">Skills</a>
        </li>
        <li className="hover:text-cyan-400 transition duration-300">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;