import React, { useContext } from 'react'
import { CiDark } from "react-icons/ci";
import { MyContext } from '../App';

const Navbar = () => {
  const{dark, setDark} = useContext(MyContext)
    const NavLinks = [
        "Home",
        "About",
        "Contact",
        "Help us",
        <CiDark onClick={() => setDark(!dark)} className='text-2xl' />,
    ];

  return (
    <div className=''>
      <nav className={`${dark ? "text-white bg-gray-800 flex justify-between items-center px-10 py-2 transition duration-300" : "bg-blue-100 flex justify-between items-center px-10 py-2"}`}>
         <h1 className={`${dark ? "text-2xl text-slate-200 font-bold" : "text-2xl text-blue-700 font-bold"}`}>Logo</h1>

         <div>
            <ul className=''>
                <li className='flex justify-center items-center gap-10 font-bold'>
                    {NavLinks.map((item, key={index}) =>{
                        return(
                         <a href="#">{item}</a>
                        )
                    })}
                </li>
            </ul>
         </div>
      </nav>
    </div>
  )
}

export default Navbar
