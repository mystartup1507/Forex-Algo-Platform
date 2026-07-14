import React from "react";
import {
  Brain,
  ShieldCheck,
  Target,
  BarChart3,
  Activity,
  TrendingUp
} from "lucide-react";

const Stat = ({
  icon,
  title,
  value,
  color
}) => (

  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4">

    <div
      className="flex h-12 w-12 items-center justify-center rounded-xl"
      style={{
        background: `${color}18`,
        boxShadow: `0 0 22px ${color}55`
      }}
    >
      {icon}
    </div>

    <div>

      <p className="text-xs uppercase tracking-widest text-zinc-500">
        {title}
      </p>

      <h3
        className="mt-1 text-xl font-bold"
        style={{ color }}
      >
        {value}
      </h3>

    </div>

  </div>

);

const AIEngineStatus = () => {

  return (

    <div className="relative overflow-hidden rounded-[30px] border border-cyan-500/20 bg-gradient-to-br from-[#171720] via-[#171a24] to-[#111827] p-8">

      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

      <div className="relative z-10">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-[34px] font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">

              AI Strategy Status

            </h2>

            <p className="mt-2 text-zinc-400">

              Real-time AI Trading Engine

            </p>

          </div>

          <div className="flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">

            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>

            <span className="font-semibold text-green-300">

              Active

            </span>

          </div>

        </div>

        <div className="grid lg:grid-cols-[340px,1fr] gap-8">

          {/* AI Core */}

          <div className="rounded-3xl border border-cyan-500/20 bg-white/[0.03] backdrop-blur-xl p-8 flex flex-col items-center">

            <div
              className="relative flex h-44 w-44 items-center justify-center rounded-full"
              style={{
                background:
                  "radial-gradient(circle,#0ea5e955 0%,transparent 70%)",
                boxShadow:
                  "0 0 60px rgba(34,211,238,.35)"
              }}
            >

              <div className="absolute h-44 w-44 rounded-full border border-cyan-400/20 animate-ping"></div>

              <div className="absolute h-36 w-36 rounded-full border border-cyan-400/20"></div>

              <div className="absolute h-28 w-28 rounded-full border border-cyan-400/30"></div>

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/20 shadow-[0_0_40px_rgba(34,211,238,.5)]">

                <Brain
                  size={40}
                  className="text-cyan-300"
                />

              </div>

            </div>

            <h3 className="mt-8 text-2xl font-bold text-white">

              Trend Following

            </h3>

            <p className="mt-2 text-zinc-400">

              Automatic AI Execution

            </p>

          </div>

          {/* Statistics */}

          <div className="grid md:grid-cols-2 gap-5">

            <Stat
              title="Accuracy"
              value="92.4%"
              color="#22c55e"
              icon={
                <Target
                  size={22}
                  className="text-green-300"
                />
              }
            />

            <Stat
              title="Win Rate"
              value="78.6%"
              color="#38bdf8"
              icon={
                <TrendingUp
                  size={22}
                  className="text-cyan-300"
                />
              }
            />

            <Stat
              title="Risk Level"
              value="Medium"
              color="#f59e0b"
              icon={
                <ShieldCheck
                  size={22}
                  className="text-amber-300"
                />
              }
            />

            <Stat
              title="Current Signal"
              value="Waiting"
              color="#a855f7"
              icon={
                <Activity
                  size={22}
                  className="text-violet-300"
                />
              }
            />

            <Stat
              title="Today's Trades"
              value="26"
              color="#06b6d4"
              icon={
                <BarChart3
                  size={22}
                  className="text-cyan-300"
                />
              }
            />

            <Stat
              title="Engine Health"
              value="Operational"
              color="#22c55e"
              icon={
                <ShieldCheck
                  size={22}
                  className="text-green-300"
                />
              }
            />

          </div>

        </div>

      </div>

    </div>

  );

};

export default AIEngineStatus;