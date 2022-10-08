import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { RiCloseLine } from 'react-icons/ri';
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from 'react-icons/hi';

import { logo } from '../assets';

const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];

const NavLinks = ({ handleClick }) => {
  return (
    <div className="mt-10">
      {links.map(item => (
        <NavLink
          to={item.to}
          key={item.name}
          className="flex items-center justify-start my-6 text-gray-400 hover:text-cyan-400 font-medium text-sm"
          onClick={() => handleClick && handleClick()}
        >
          <item.icon className="h-6 w-6 mr-2" />
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };
    sidebarOpen && document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <>
      <div className="hidden w-[240px] py-10 px-4 bg-[#191624] md:flex flex-col">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>

      <div className="absolute top-6 right-3 md:hidden">
        {!sidebarOpen ? (
          <HiOutlineMenu
            className="text-white w-6 h-6 cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />
        ) : (
          <RiCloseLine
            className="text-white w-6 h-6 cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>

      <div
        ref={sidebarRef}
        className={`absolute top-0 ${sidebarOpen ? 'left-0' : '-left-full'} 
        h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-20 p-6 md:hidden smooth-transition `}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setSidebarOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
