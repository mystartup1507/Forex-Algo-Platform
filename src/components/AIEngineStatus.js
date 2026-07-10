import React from 'react';

const AIEngineStatus = () => {

  return (

    <div className="bg-zinc-900 border border-cyan-500/30 rounded-3xl p-8 space-y-6">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-3xl font-bold text-cyan-400">
            AI Strategy Dashboard
          </h2>

          <p className="text-zinc-500 mt-1">
            Real-Time Trading Intelligence
          </p>

        </div>

        <div className="h-4 w-4 rounded-full bg-green-400 animate-pulse"></div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700">
          <p className="text-zinc-500 text-sm mb-2">
            Strategy
          </p>
          <h3 className="text-xl font-bold text-green-400">
            Trend Following
          </h3>
        </div>

        <div className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700">
          <p className="text-zinc-500 text-sm mb-2">
            Execution Mode
          </p>
          <h3 className="text-xl font-bold text-cyan-400">
            Automatic
          </h3>
        </div>

        <div className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700">
          <p className="text-zinc-500 text-sm mb-2">
            Risk Level
          </p>
          <h3 className="text-xl font-bold text-yellow-400">
            Medium
          </h3>
        </div>

        <div className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700">
          <p className="text-zinc-500 text-sm mb-2">
            Current Signal
          </p>
          <h3 className="text-xl font-bold text-purple-400">
            Waiting for Entry
          </h3>
        </div>

        <div className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700">
          <p className="text-zinc-500 text-sm mb-2">
            Trading Session
          </p>
          <h3 className="text-xl font-bold text-orange-400">
            NSE Live
          </h3>
        </div>

        <div className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700">
          <p className="text-zinc-500 text-sm mb-2">
            Engine Health
          </p>
          <h3 className="text-xl font-bold text-green-400">
            Operational
          </h3>
        </div>

      </div>

    </div>

  );

};

export default AIEngineStatus;