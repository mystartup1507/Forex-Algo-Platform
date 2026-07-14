import React from "react";
import {
  Landmark,
  Bot,
  MousePointerClick
} from "lucide-react";

const MarketSelector = ({
  tradingMode,
  setTradingMode,
  selectedPair,
  setSelectedPair
}) => {

  return (

    <div className="relative overflow-hidden rounded-[30px] border border-purple-500/20 bg-gradient-to-br from-[#171720] via-[#171a24] to-[#111827] p-8">

      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

      <div className="relative z-10">

        <div className="mb-7">

          <h2 className="text-[34px] font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">

            Trading Configuration

          </h2>

          <p className="mt-2 text-zinc-400">

            Configure trading mode and execution

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 shadow-[0_0_35px_rgba(168,85,247,.08)]">

          <div className="flex items-center gap-5">

            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/20"
              style={{
                background:
                  "linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.02))",
                boxShadow:
                  "0 0 35px rgba(168,85,247,.28)"
              }}
            >

              <Landmark
                size={28}
                className="text-purple-300"
              />

            </div>

            <div>

              <p className="text-sm text-zinc-500">

                Connected Broker

              </p>

              <h3 className="text-2xl font-bold text-white">

                Angel One

              </h3>

            </div>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-5 mt-7">

          {/* AUTO MODE */}

          <button
            onClick={() => setTradingMode("auto")}
            className="relative overflow-hidden rounded-2xl border backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1"
            style={
              tradingMode === "auto"
                ? {
                    borderColor: "rgba(34,197,94,.35)",
                    background:
                      "linear-gradient(135deg,rgba(34,197,94,.20),rgba(22,163,74,.10),rgba(255,255,255,.03))",
                    boxShadow:
                      "0 0 28px rgba(34,197,94,.28), inset 0 1px 0 rgba(255,255,255,.06)"
                  }
                : {
                    borderColor: "rgba(255,255,255,.08)",
                    background:
                      "linear-gradient(135deg,rgba(255,255,255,.04),rgba(255,255,255,.02))"
                  }
            }
          >

            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />

            <div className="relative flex items-center justify-center gap-3 py-5">

              <Bot
                size={20}
                className={
                  tradingMode === "auto"
                    ? "text-green-300"
                    : "text-zinc-400"
                }
              />

              <span className="text-lg font-bold text-white">

                Auto Mode

              </span>

            </div>

          </button>

          {/* MANUAL MODE */}

          <button
            onClick={() => setTradingMode("manual")}
            className="relative overflow-hidden rounded-2xl border backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1"
            style={
              tradingMode === "manual"
                ? {
                    borderColor: "rgba(251,191,36,.35)",
                    background:
                      "linear-gradient(135deg,rgba(251,191,36,.18),rgba(249,115,22,.10),rgba(255,255,255,.03))",
                    boxShadow:
                      "0 0 28px rgba(251,191,36,.25), inset 0 1px 0 rgba(255,255,255,.06)"
                  }
                : {
                    borderColor: "rgba(255,255,255,.08)",
                    background:
                      "linear-gradient(135deg,rgba(255,255,255,.04),rgba(255,255,255,.02))"
                  }
            }
          >

            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />

            <div className="relative flex items-center justify-center gap-3 py-5">

              <MousePointerClick
                size={20}
                className={
                  tradingMode === "manual"
                    ? "text-amber-300"
                    : "text-zinc-400"
                }
              />

              <span className="text-lg font-bold text-white">

                Manual Pair

              </span>

            </div>

          </button>

        </div>

        {

          tradingMode === "manual" && (

            <input
              type="text"
              placeholder="Search Instrument"
              value={selectedPair}
              onChange={(e) =>
                setSelectedPair(e.target.value)
              }
              className="mt-7 w-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl px-5 py-4 text-white placeholder-zinc-500 outline-none transition-all duration-300 focus:border-cyan-400"
            />

          )

        }

      </div>

    </div>

  );

};

export default MarketSelector;