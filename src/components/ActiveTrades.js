import React from "react";
import {
  CheckCircle2,
  TrendingUp,
  Activity,
  TriangleAlert,
  Clock3
} from "lucide-react";

const activities = [
  {
    title: "Broker Connected",
    message: "Angel One connection established successfully",
    time: "09:15 AM",
    color: "#22c55e",
    Icon: CheckCircle2
  },
  {
    title: "Market Feed",
    message: "NSE Live data streaming started",
    time: "09:16 AM",
    color: "#38bdf8",
    Icon: TrendingUp
  },
  {
    title: "AI Engine",
    message: "AI Strategy initialized successfully",
    time: "09:17 AM",
    color: "#a855f7",
    Icon: Activity
  },
  {
    title: "Scanning",
    message: "Scanning all NSE instruments",
    time: "09:18 AM",
    color: "#f59e0b",
    Icon: TriangleAlert
  },
  {
    title: "Waiting",
    message: "Waiting for high probability trade setup",
    time: "LIVE",
    color: "#22c55e",
    Icon: Clock3
  }
];

const ActiveTrades = () => {

  return (

    <div
      className="relative overflow-hidden rounded-[30px] border border-cyan-500/20
      bg-gradient-to-br from-[#1b1d2b] via-[#1d202d] to-[#162535]
      backdrop-blur-3xl p-6"
    >

      <div className="absolute -top-32 right-0 w-72 h-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative flex items-center justify-between mb-6">

        <div>

          <h2 className="text-[28px] font-black bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-500 bg-clip-text text-transparent">

            Recent Activity

          </h2>

          <p className="text-zinc-400 text-lg mt-1">

            Live Platform Events

          </p>

        </div>

        <div className="px-6 py-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 flex items-center gap-3">

          <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>

          <span className="text-emerald-300 font-semibold">

            Live

          </span>

        </div>

      </div>

      <div className="space-y-3">

        {

          activities.map((item, index) => {

            const Icon = item.Icon;

            return (

              <div
                key={index}
                className="rounded-[22px]
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                px-5 py-3
                transition-all duration-300
                hover:border-cyan-400/30
                hover:shadow-[0_0_25px_rgba(0,212,255,.08)]"
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-5">

                    <div
                      className="h-11 w-11 rounded-2xl border border-white/10 flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.02))",
                        boxShadow: `0 0 20px ${item.color}40`
                      }}
                    >

                      <Icon
                        size={21}
                        style={{
                          color: item.color
                        }}
                      />

                    </div>

                    <div>

                      <h3 className="text-base font-bold text-white">

                        {item.title}

                      </h3>

                      <p className="text-sm text-zinc-400 mt-0.5">

                        {item.message}

                      </p>

                    </div>

                  </div>

                  <div
                    className="px-5 py-2 rounded-full border border-white/10 font-semibold text-sm"
                    style={{
                      background: `${item.color}18`,
                      color: item.color
                    }}
                  >

                    {item.time}

                  </div>

                </div>

              </div>

            );

          })

        }

      </div>

    </div>

  );

};

export default ActiveTrades;