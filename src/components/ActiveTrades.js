import React from 'react';

const ActiveTrades = () => {

  const activities = [
    {
      time: '09:15 AM',
      message: 'Angel One connection established'
    },
    {
      time: '09:16 AM',
      message: 'Market data feed started'
    },
    {
      time: '09:17 AM',
      message: 'AI Engine initialized'
    },
    {
      time: '09:18 AM',
      message: 'Scanning NSE instruments'
    },
    {
      time: 'Live',
      message: 'Waiting for high probability setup'
    }
  ];

  return (

    <div className="bg-zinc-900 border border-cyan-500/30 rounded-3xl p-8 space-y-6">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-3xl font-bold text-cyan-400">
            Activity Log
          </h2>

          <p className="text-zinc-500 mt-1">
            Live Platform Events
          </p>

        </div>

        <div className="h-4 w-4 rounded-full bg-green-400 animate-pulse"></div>

      </div>

      <div className="space-y-4">

        {activities.map((item, index) => (

          <div
            key={index}
            className="bg-zinc-800 border border-zinc-700 rounded-2xl p-5 flex justify-between items-center"
          >

            <span className="text-cyan-400 font-semibold">
              {item.time}
            </span>

            <span className="text-zinc-300">
              {item.message}
            </span>

          </div>

        ))}

      </div>

    </div>

  );

};

export default ActiveTrades;