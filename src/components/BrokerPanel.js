import React from 'react';

import {
  PlugZap,
  Unplug,
  Play,
  Square
} from 'lucide-react';

const BrokerPanel = ({
  connectionData,
  setConnectionData,
  brokerConnected,
  connectBroker,
  disconnectBroker,
  algoRunning,
  toggleAlgo
}) => {

  return (

    <div className="bg-zinc-900 border border-green-500/30 rounded-3xl p-8 space-y-5">

      <h2 className="text-3xl font-bold text-green-400">
        Angel One Login
      </h2>

      <input
        type="text"
        placeholder="Angel One Client ID"
        value={connectionData.clientId}
        onChange={(e) =>
          setConnectionData({
            ...connectionData,
            clientId: e.target.value
          })
        }
        className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 outline-none"
      />

      <input
        type="password"
        placeholder="Angel One PIN"
        value={connectionData.password}
        onChange={(e) =>
          setConnectionData({
            ...connectionData,
            password: e.target.value
          })
        }
        className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 outline-none"
      />

      <input
        type="text"
        placeholder="TOTP Code"
        value={connectionData.totp}
        onChange={(e) =>
          setConnectionData({
            ...connectionData,
            totp: e.target.value
          })
        }
        className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 outline-none"
      />

      {
        brokerConnected ? (

          <button
            onClick={disconnectBroker}
            className="w-full bg-red-600 hover:bg-red-700 rounded-2xl p-4 font-bold flex items-center justify-center gap-2"
          >
            <Unplug size={18} />
            Disconnect Angel One
          </button>

        ) : (

          <button
            onClick={connectBroker}
            className="w-full bg-green-600 hover:bg-green-700 rounded-2xl p-4 font-bold flex items-center justify-center gap-2"
          >
            <PlugZap size={18} />
            Connect Angel One
          </button>

        )
      }

      {
        algoRunning ? (

          <button
            onClick={toggleAlgo}
            className="w-full bg-red-600 hover:bg-red-700 rounded-2xl p-4 font-bold flex items-center justify-center gap-2"
          >
            <Square size={18} />
            Stop Algo
          </button>

        ) : (

          <button
            onClick={toggleAlgo}
            className="w-full bg-cyan-600 hover:bg-cyan-700 rounded-2xl p-4 font-bold flex items-center justify-center gap-2"
          >
            <Play size={18} />
            Start Algo
          </button>

        )
      }

    </div>

  );

};

export default BrokerPanel;