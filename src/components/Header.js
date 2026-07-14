import React from "react";
import {
  LogOut,
  Wifi,
  Activity
} from "lucide-react";

const Header = () => {

  const logout = () => {

    localStorage.clear();
    window.location.href = "/";

  };

  return (

    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b16]/75 backdrop-blur-3xl">

      <div className="mx-auto flex max-w-[1650px] items-center justify-between px-6 py-4">

        <div className="flex items-center gap-5">

          <div className="relative">

            <div className="absolute inset-0 rounded-2xl bg-cyan-500/20 blur-2xl"></div>

            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-500 shadow-[0_0_35px_rgba(0,180,255,.45)]">

              <Activity
                size={34}
                className="text-white"
              />

            </div>

          </div>

          <div>

            <h1 className="text-[42px] font-black leading-none bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">

              Forex Algo Platform

            </h1>

            <p className="mt-2 text-[18px] text-slate-400">

              Angel One AI Trading System

            </p>

          </div>

        </div>

        <div className="flex items-center gap-5">

          <div className="flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-[#0f1930]/80 px-6 py-4 shadow-[0_0_20px_rgba(0,170,255,.12)] backdrop-blur-xl">

            <span className="h-3 w-3 animate-pulse rounded-full bg-green-400"></span>

            <Wifi
              size={18}
              className="text-cyan-400"
            />

            <span className="font-semibold text-green-400">

              Live Market

            </span>

          </div>

          <button
            onClick={logout}
            className="rounded-2xl bg-gradient-to-r from-red-500 to-red-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,0,.35)]"
          >

            <div className="flex items-center gap-3">

              <LogOut size={18} />

              Logout

            </div>

          </button>

        </div>

      </div>

    </header>

  );

};

export default Header;