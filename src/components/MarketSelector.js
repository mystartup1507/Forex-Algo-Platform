import React from 'react';
import { Landmark } from 'lucide-react';

const MarketSelector = ({
  tradingMode,
  setTradingMode,
  selectedPair,
  setSelectedPair
}) => {

  return (

    <div className="bg-zinc-900 border border-purple-500/30 rounded-3xl p-8 space-y-6">

      <h2 className="text-3xl font-bold text-purple-400">
        Trading Configuration
      </h2>

      <div className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 flex items-center gap-3">
        <Landmark size={18} />
        <span className="font-semibold text-lg">
          Angel One
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">

        <button
          onClick={() => setTradingMode('auto')}
          className={
            tradingMode === 'auto'
              ? 'bg-green-600 p-4 rounded-2xl font-bold'
              : 'bg-zinc-800 p-4 rounded-2xl font-bold'
          }
        >
          Auto Mode
        </button>

        <button
          onClick={() => setTradingMode('manual')}
          className={
            tradingMode === 'manual'
              ? 'bg-yellow-600 p-4 rounded-2xl font-bold'
              : 'bg-zinc-800 p-4 rounded-2xl font-bold'
          }
        >
          Manual Pair
        </button>

      </div>

      {
        tradingMode === 'manual' && (

          <input
            type="text"
            placeholder="Search Instrument"
            value={selectedPair}
            onChange={(e) =>
              setSelectedPair(e.target.value)
            }
            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 outline-none"
          />

        )
      }

    </div>

  );

};

export default MarketSelector;