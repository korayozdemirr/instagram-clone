import React, { useRef, useState } from "react";
import Icon from "./Icon";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
function SideBar() {
  const [open, setOpen] = useState(true);
  const ref = useRef();
  useState(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(true)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex fixed w-[248px] h-screen flex-col border-r p-3 font-sans">
      <div className="mb-6 mt-4 p-3">
        <img src="/src/assets/logo.png" alt="instagram" className="w-[105px]" />
      </div>
      <nav className="flex flex-col gap-y-2 mb-10">
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
              <img
                src="/no-avatar.jpeg"
                alt=""
                className="rounded-full w-[28px] h-[28px]"
              />
              <span className="text-base">Profil</span>
            </div>
          )}
        </NavLink>
      </nav>
      <div
        className="flex w-full rounded gap-x-4 p-3 cursor-pointer relative hover:bg-zinc-200"
        onClick={() => setOpen(false)}
      >
        <div
          ref={ref}
          className={classNames({
            "flex flex-col absolute bg-zinc-50 shadow-2xl w-[266px] rounded-lg p-6 bottom-11": true,
            hidden: open,
          })}
        >
          <NavLink to="#" className="hover:bg-zinc-200 rounded p-3">
            <div className="flex items-center gap-x-4 font-normal">
              <Icon name="settings" size={24} />
              <span>Ayarlar</span>
            </div>
          </NavLink>
          <NavLink to="#" className="hover:bg-zinc-200 rounded p-3">
            <div className="flex items-center gap-x-4 font-normal">
              <Icon name="activity" size={24} />
              <span>Haraketlerin</span>
            </div>
          </NavLink>
          <NavLink to="#" className="hover:bg-zinc-200 rounded p-3">
            <div className="flex items-center gap-x-4 font-normal">
              <Icon name="saved" size={24} />
              <span>Kaydedilenler</span>
            </div>
          </NavLink>
          <NavLink to="#" className="hover:bg-zinc-200 rounded p-3">
            <div className="flex items-center gap-x-4 font-normal">
              <Icon name="sun" size={24} />
              <span>Görünümü değiştir</span>
            </div>
          </NavLink>
          <NavLink to="#" className="hover:bg-zinc-200 rounded p-3">
            <div className="flex items-center gap-x-4 font-normal">
              <Icon name="feedback" size={24} />
              <span>Bir sorun bildir</span>
            </div>
          </NavLink>
          <NavLink to="#" className="hover:bg-zinc-200 rounded p-3">
            <div className="flex items-center gap-x-4 font-normal">
              <span>Hesap değiştir</span>
            </div>
          </NavLink>
          <NavLink to="#" className="hover:bg-zinc-200 rounded p-3">
            <div className="flex items-center gap-x-4 font-normal">
              <span>Çıkış yap</span>
            </div>
          </NavLink>
        </div>
        <Icon name="hamburger" size={24} />
        <p>Daha Fazla</p>
      </div>
    </div>
  );
}

export default SideBar;
