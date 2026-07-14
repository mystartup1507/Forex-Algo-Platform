import React from "react";
import {
  Activity,
  Wifi,
  ShieldCheck,
  Server,
  Landmark
} from "lucide-react";

const StatusCard = ({
  title,
  value,
  subtitle,
  badge,
  icon,
  borderColor,
  glowColor
}) => {

  return (

    <div
      className={`group relative overflow-hidden rounded-[20px] border ${borderColor}
      bg-[#131823]/90 backdrop-blur-3xl transition-all duration-300
      hover:-translate-y-1`}
      style={{
        minHeight: "135px",
        padding: "16px",
        boxShadow: `
          inset 0 1px 0 rgba(255,255,255,.06),
          0 0 35px ${glowColor}18
        `
      }}
    >

      {/* Glow */}

      <div
        className="absolute -right-20 -top-20 h-52 w-52 rounded-full blur-[90px] opacity-70"
        style={{
          background: glowColor
        }}
      />

      <div
        className="absolute -left-16 -bottom-16 h-40 w-40 rounded-full blur-[70px] opacity-30"
        style={{
          background: glowColor
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />

      <div className="relative flex justify-between">

        <div>

          <div className="text-[10px] uppercase tracking-[4px] text-slate-500">

            {title}

          </div>

          <div className="mt-3 text-[16px] font-bold text-white leading-none">

            {value}

          </div>

          <div className="mt-2 text-[12px] text-slate-400">

            {subtitle}

          </div>

        </div>

        <div
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10"
          style={{
            background:
              "linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.02))",
            boxShadow: `0 0 20px ${glowColor}55`
          }}
        >

          {icon}

        </div>

      </div>

      <div className="relative mt-4">

        <div
          className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-[12px] font-medium text-slate-200 backdrop-blur-xl"
          style={{
            background:
              "rgba(255,255,255,.05)"
          }}
        >

          {badge}

        </div>

      </div>

    </div>

  );

};

const StatusCards = ({
  brokerConnected,
  algoRunning
}) => {

  return (

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">

      <StatusCard
        title="Connection"
        value="Angel One"
        subtitle="Last Sync : Just Now"
        badge={brokerConnected ? "🟢 Connected" : "🔴 Disconnected"}
        borderColor="border-cyan-400/20"
        glowColor="#00D9FF"
        icon={
          <Landmark
            size={22}
            className="text-cyan-300"
          />
        }
      />

      <StatusCard
        title="Algo Engine"
        value={algoRunning ? "Running" : "Stopped"}
        subtitle="Auto Mode Active"
        badge={algoRunning ? "🟢 Active" : "⚪ Idle"}
        borderColor="border-blue-400/20"
        glowColor="#3B82F6"
        icon={
          <Activity
            size={26}
            className="text-cyan-300"
          />
        }
      />

      <StatusCard
        title="Market Status"
        value="Live"
        subtitle="NSE Live Feed"
        badge="📡 Streaming"
        borderColor="border-emerald-400/20"
        glowColor="#00EFA5"
        icon={
          <Wifi
            size={26}
            className="text-emerald-300"
          />
        }
      />

      <StatusCard
        title="License"
        value="Active"
        subtitle="Valid License"
        badge="🛡 Protected"
        borderColor="border-violet-400/20"
        glowColor="#8B5CF6"
        icon={
          <ShieldCheck
            size={26}
            className="text-violet-300"
          />
        }
      />

      <StatusCard
        title="Health"
        value="Healthy"
        subtitle="All Systems Operational"
        badge="🟢 Online"
        borderColor="border-orange-400/20"
        glowColor="#FF8A00"
        icon={
          <Server
            size={26}
            className="text-orange-300"
          />
        }
      />

    </div>

  );

};

export default StatusCards;