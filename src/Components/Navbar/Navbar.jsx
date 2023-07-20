import React from 'react'

//Import Icons --->
import { SiConsul } from 'react-icons/si'
import { BsPhoneVibrate } from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'

//Imported Images-->
import logo from '../../assets/Company-logo.png'
import react from '@vitejs/plugin-react-swc'
const Navbar = () => {
  return (
    <div className="navBar flex">
      <div className="  navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>

        <div className=" none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" />
            Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" />
            Languages
          </li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign out</span>
        </div>
      </div>
      <div className="navBArTwo">
        <div className="logoDiv">
          <img src={logo} className="Logo" />
        </div>
        <div className="navBarMenu">
          <ul className="menu flex">
            <li className="listItem">Home</li>
            <li className="listItem">About</li>
            <li className="listItem">Offers</li>
            <li className="listItem">Seats</li>
            <li className="listItem">Destination</li>
          </ul>
          <button className="btn flex btnOne">Contact</button>
          {/* <button className="btn flex btnTwo">Contact</button> */}
          <div className="toggleIcon">
            <CgMenuGridO />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
