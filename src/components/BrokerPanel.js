import React from "react";
import {
  PlugZap,
  Unplug,
  Play,
  Square,
  ShieldCheck
} from "lucide-react";

const inputStyle =
  "w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-5 text-[16px] text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-white/[0.05]";

const BrokerPanel = ({
  connectionData,
  setConnectionData,
  brokerConnected,
  connectBroker,
  disconnectBroker,
  algoRunning,
  toggleAlgo
}) => {

  const glassButton =
    "group relative overflow-hidden w-full h-14 rounded-2xl border border-white/10 backdrop-blur-xl flex items-center justify-center gap-3 text-[17px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5";

  return (

    <div
      className="relative overflow-hidden rounded-[24px] border border-emerald-500/20 backdrop-blur-2xl"
      style={{
        background:
          "linear-gradient(135deg,#171820 0%,#1a1b24 60%,#141821 100%)",
        boxShadow:
          "0 0 45px rgba(16,185,129,.08)"
      }}
    >

      {/* Background Glow */}

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="absolute -left-24 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 p-8">

        {/* Header */}

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-3xl font-extrabold text-emerald-400">

              Angel One

            </h2>

            <p className="mt-1 text-sm text-zinc-400">

              Secure Broker Connection

            </p>

          </div>

          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20"
            style={{
              background:
                "linear-gradient(135deg,rgba(16,185,129,.15),rgba(16,185,129,.05))",
              boxShadow:
                "0 0 22px rgba(16,185,129,.25)"
            }}
          >

            <ShieldCheck
              size={24}
              className="text-emerald-300"
            />

          </div>

        </div>

        {/* Inputs */}

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Angel One Client ID"
            value={connectionData.clientId}
            onChange={(e)=>
              setConnectionData({
                ...connectionData,
                clientId:e.target.value
              })
            }
            className={inputStyle}
          />

          <input
            type="password"
            placeholder="Angel One PIN"
            value={connectionData.password}
            onChange={(e)=>
              setConnectionData({
                ...connectionData,
                password:e.target.value
              })
            }
            className={inputStyle}
          />

          <input
            type="text"
            placeholder="TOTP Code"
            value={connectionData.totp}
            onChange={(e)=>
              setConnectionData({
                ...connectionData,
                totp:e.target.value
              })
            }
            className={inputStyle}
          />

        </div>

        {/* Buttons */}

        <div className="mt-6 space-y-3">

          {

            brokerConnected ?

            (

              <button
                onClick={disconnectBroker}
                className={glassButton}
                style={{
                  background:
                    "linear-gradient(135deg,rgba(239,68,68,.16),rgba(239,68,68,.05))",
                  border:
                    "1px solid rgba(239,68,68,.22)",
                  boxShadow:
                    "0 0 35px rgba(239,68,68,.20), inset 0 1px 0 rgba(255,255,255,.08)"
                }}
              >

                <Unplug
                  size={18}
                  className="text-red-300"
                />

                Disconnect Angel One

              </button>

            )

            :

            (

              <button
                onClick={connectBroker}
                className={glassButton}
                style={{
                  background:
                    "linear-gradient(135deg,rgba(16,185,129,.18),rgba(16,185,129,.05))",
                  border:
                    "1px solid rgba(16,185,129,.22)",
                  boxShadow:
                    "0 0 35px rgba(16,185,129,.22), inset 0 1px 0 rgba(255,255,255,.08)"
                }}
              >

                <PlugZap
                  size={18}
                  className="text-emerald-300"
                />

                Connect Angel One

              </button>

            )

          }

          {

            algoRunning ?

            (

              <button
                onClick={toggleAlgo}
                className={glassButton}
                style={{
                  background:
                    "linear-gradient(135deg,rgba(239,68,68,.16),rgba(239,68,68,.05))",
                  border:
                    "1px solid rgba(239,68,68,.22)",
                  boxShadow:
                    "0 0 35px rgba(239,68,68,.20), inset 0 1px 0 rgba(255,255,255,.08)"
                }}
              >

                <Square
                  size={18}
                  className="text-red-300"
                />

                Stop Algo

              </button>

            )

            :

            (

              <button
                onClick={toggleAlgo}
                className={glassButton}
                style={{
                  background:
                    "linear-gradient(135deg,rgba(59,130,246,.18),rgba(37,99,235,.05))",
                  border:
                    "1px solid rgba(59,130,246,.22)",
                  boxShadow:
                    "0 0 35px rgba(59,130,246,.22), inset 0 1px 0 rgba(255,255,255,.08)"
                }}
              >

                <Play
                  size={18}
                  className="text-cyan-300"
                />

                Start Algo

              </button>

            )

          }

        </div>

      </div>

    </div>

  );

};

export default BrokerPanel;