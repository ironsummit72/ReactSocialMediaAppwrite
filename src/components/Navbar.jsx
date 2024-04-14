import { Input } from '@/shadcomponents/ui/input'

import img from '@/test/p.jpg'
import companylogo from '../assets/companylogo/logo.png'
import { Link ,NavLink } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { IoPeopleOutline,IoVideocam } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";

function Navbar() {
  return (
    <>
      <div className="nav w-screen h-16 shadow-lg ">
        <div className="w-[100%] h-full flex items-center gap-10">
          <Link to="/" className="companylogo h-full w-16 ">
            <img className="w-full h-full" src={companylogo} alt="" />
          </Link>
          <Input
            autoComplete={'off'}
            className="w-80 rounded-full bg-gray-100 "
            placeholder="Search Users"
            type="search"
            name="search"
            id=""
          />
          <div className="navlinks h-full w-[40%] flex items-center justify-center gap-16">
            <NavLink to="/" className={`hover:bg-gray-100 p-3`}>
              {({ isActive, isPending, isTransitioning }) => (
               
                <AiFillHome size={'2.5em'} color={isActive?'#1937e3':'black'}/>
              )}
            </NavLink>
            <NavLink to="/people" className={`hover:bg-gray-100 p-3`}>
              {({ isActive, isPending, isTransitioning }) => (
                <IoPeopleOutline size={'2.5em'} color={isActive?'#1937e3':'black'}/>
              )}
            </NavLink>
            <NavLink to="/watch" className={`hover:bg-gray-100 p-3`}>
              {({ isActive, isPending, isTransitioning }) => (
                <MdOndemandVideo size={'2.5em'} color={isActive?'#1937e3':'black'}/>
              )}
            </NavLink>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Navbar