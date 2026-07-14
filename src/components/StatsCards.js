import React from "react";
import {
  Wallet,
  TrendingUp,
  Briefcase,
  Clock3
} from "lucide-react";

const Card = ({
  title,
  value,
  icon,
  color,
  border
}) => {

  return (

    <div
      className={`group relative overflow-hidden rounded-[26px] border ${border}
      bg-[linear-gradient(135deg,#18213b_0%,#111827_45%,#0a1020_100%)]
      backdrop-blur-3xl
      px-6 py-5
      transition-all duration-300 hover:-translate-y-1`}
      style={{
        boxShadow: `0 0 35px ${color}18`
      }}
    >

      {/* Glow */}

      <div
        className="absolute -top-20 -right-16 h-48 w-48 rounded-full blur-[90px] opacity-60 transition-all duration-500 group-hover:scale-125"
        style={{
          background: color
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />

      <div className="relative flex justify-between items-start">

        <div>

          <p className="uppercase tracking-[3px] text-[11px] text-slate-500">

            {title}

          </p>

          <h2
            className="mt-3 font-black leading-none"
            style={{
              color
            }}
          >

            {value}

          </h2>

        </div>

        <div
          className="h-14 w-14 rounded-2xl border border-white/10 flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.02))",
            boxShadow: `0 0 25px ${color}50`
          }}
        >

          {icon}

        </div>

      </div>

    </div>

  );

};

const StatsCards = ({
  runningPL,
  availableBalance,
  runningTrades,
  currentTime
}) => {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <Card
        title="Available Balance"
        value={`₹ ${Number(availableBalance).toLocaleString()}`}
        color="#38BDF8"
        border="border-cyan-400/20"
        icon={
          <Wallet
            size={26}
            className="text-cyan-300"
          />
        }
      />

      <Card
        title="Today's P&L"
        value={`₹ ${Number(runningPL).toLocaleString()}`}
        color="#22C55E"
        border="border-emerald-400/20"
        icon={
          <TrendingUp
            size={26}
            className="text-emerald-300"
          />
        }
      />

      <Card
        title="Open Positions"
        value={runningTrades}
        color="#F59E0B"
        border="border-amber-400/20"
        icon={
          <Briefcase
            size={26}
            className="text-amber-300"
          />
        }
      />

      <Card
        title="Current Time"
        value={currentTime}
        color="#A855F7"
        border="border-violet-400/20"
        icon={
          <Clock3
            size={26}
            className="text-violet-300"
          />
        }
      />

    </div>

  );

};

export default StatsCards;