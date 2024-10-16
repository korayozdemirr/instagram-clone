import React from "react";
import Icon from "./Icon";
import { NavLink } from "react-router-dom";
function SideBar() {
  return (
    <div className="flex sticky w-[248px] h-screen flex-col border-r p-3 font-sans">
      <div className="mb-7 mt-5 p-3">
        <img src="/src/assets/logo.png" alt="instagram" className="w-[105px]" />
      </div>
      <NavLink to="/">
        {({ isActive }) => (
          <div className="flex items-center gap-x-4 p-3 rounded hover:bg-zinc-200">
            <Icon name={isActive ? "home-filled" : "home"} size={24} />
            <span className="text-base font-bold">Ana Sayfa</span>
          </div>
        )}
      </NavLink>
      <NavLink to="#">
        {({ isActive }) => (
          <div className="flex items-center gap-x-4 p-3 rounded hover:bg-zinc-200">
            <Icon name={isActive ? "search" : ""} size={24} />
            <span className="text-base font-normal">Ara</span>
          </div>
        )}
      </NavLink>
      <NavLink to="/explore">
        {({ isActive }) => (
          <div className="flex items-center gap-x-4 p-3 rounded hover:bg-zinc-200">
            <Icon name={isActive ? "explore" : "explore"} size={24} />
            <span className="text-base">Keşfet</span>
          </div>
        )}
      </NavLink>
      <NavLink to="/reels">
        {({ isActive }) => (
          <div className="flex items-center gap-x-4 p-3 rounded hover:bg-zinc-200">
            <Icon name={isActive ? "reels" : "reels"} size={24} />
            <span className="text-base">Reels</span>
          </div>
        )}
      </NavLink>
      <NavLink to="/inbox">
        {({ isActive }) => (
          <div className="flex items-center gap-x-4 p-3 rounded hover:bg-zinc-200">
            <Icon name={isActive ? "direct-filled" : "direct"} size={24} />
            <span className="text-base">Mesajlar</span>
          </div>
        )}
      </NavLink>
      <NavLink to="/#">
        {({ isActive }) => (
          <div className="flex items-center gap-x-4 p-3 rounded hover:bg-zinc-200">
            <Icon name={isActive ? "heart" : "heart"} size={24} />
            <span className="text-base">Bildirimler</span>
          </div>
        )}
      </NavLink>
      <NavLink to="/#">
        {({ isActive }) => (
          <div className="flex items-center gap-x-4 p-3 rounded hover:bg-zinc-200">
            <Icon name={isActive ? "create" : "create"} size={24} />
            <span className="text-base">Oluştur</span>
          </div>
        )}
      </NavLink>
      <NavLink to="/profile">
        {({ isActive }) => (
          <div className="flex items-center gap-x-4 p-3 rounded hover:bg-zinc-200">
            <img src="/no-avatar.jpeg" alt="" className="rounded-full w-[28px] h-[28px]" />
            <span className="text-base">Profil</span>
          </div>
        )}
      </NavLink>
    </div>
  );
}

export default SideBar;
