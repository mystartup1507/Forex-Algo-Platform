import React, {
  useEffect,
  useState
} from 'react';
import { toast } from 'react-hot-toast';

import Header from '../components/Header';
import StatusCards from '../components/StatusCards';
import MarketSelector from '../components/MarketSelector';
import BrokerPanel from '../components/BrokerPanel';
import AIEngineStatus from '../components/AIEngineStatus';
import ActiveTrades from '../components/ActiveTrades';
import StatsCards from '../components/StatsCards';

const ClientDashboard = () => {

  const [brokerConnected, setBrokerConnected] =
    useState(false);

  const [currentTime, setCurrentTime] =
    useState('');

  const [runningPL] =
    useState(0);

  const [availableBalance, setAvailableBalance] =
    useState(0);

  const [runningTrades, setRunningTrades] =
    useState(0);

  const [positions, setPositions] =
    useState([]);

  const [tradingMode, setTradingMode] =
    useState('auto');

  const [selectedPair, setSelectedPair] =
    useState('');

  const [algoRunning, setAlgoRunning] =
    useState(false);

  const [connectionData, setConnectionData] =
    useState({
      clientId: '',
      password: '',
      totp: '',
      server: ''
    });

  useEffect(() => {

    const activated =
      localStorage.getItem('licenseActivated');

    if (activated !== 'true') {

      window.location.href = '/';
      return;

    }

    const timer =
      setInterval(() => {

        setCurrentTime(
          new Date().toLocaleTimeString()
        );

      }, 1000);

    return () => clearInterval(timer);

  }, []);

  const connectBroker = async () => {

    try {

      if (
        !connectionData.clientId ||
        !connectionData.password
      ) {

        toast.error('Please fill broker credentials');

        return;

      }

      const response =
        await fetch(
          'https://forexalgoapi.duckdns.org/api/broker/connect',
          {
            method: 'POST',

            headers: {
              'Content-Type':
                'application/json'
            },

            body: JSON.stringify({

              apiKey: 'TTkHGDYk',

              broker: 'angel',

              clientId:
                connectionData.clientId,

              password:
                connectionData.password,

              totp:
                connectionData.totp

            })

          }
        );

      const data =
        await response.json();

      if (!data.success) {

        toast.error(data.message);
        return;

      }

      localStorage.setItem(
        'brokerConnection',
        'true'
      );

      setBrokerConnected(true);

      const profileResponse =
        await fetch(
          'https://forexalgoapi.duckdns.org/api/broker/profile',
          {
            method: 'POST',

            headers: {
              'Content-Type':
                'application/json'
            },

            body: JSON.stringify({

              apiKey: 'TTkHGDYk',

              clientId:
                connectionData.clientId,

              password:
                connectionData.password,

              totp:
                connectionData.totp

            })

          }
        );

      const profileData =
        await profileResponse.json();

      if (profileData.success) {

        setAvailableBalance(
          profileData.rms?.data?.availablecash || 0
        );

      }

      setPositions([]);
      setRunningTrades(0);

      toast.success('Broker Connected Successfully');

    } catch (error) {

      console.log(error);

      toast.error('Connection Error');

    }

  };

  const disconnectBroker = () => {

    localStorage.removeItem(
      'brokerConnection'
    );

    setBrokerConnected(false);

    setPositions([]);

    toast('Broker Disconnected',{icon:'ℹ️'});

  };

  const toggleAlgo = async () => {

    try {

      if (!brokerConnected) {

        toast.warning ? toast.warning('Connect Broker First') : toast('Connect Broker First',{icon:'⚠️'});

        return;

      }

      if (algoRunning) {

        setAlgoRunning(false);

        toast('Algo Stopped',{icon:'⏹️'});

        return;

      }

      const response =
        await fetch(
          'https://forexalgoapi.duckdns.org/api/algo/start',
          {
            method: 'POST',

            headers: {
              'Content-Type':
                'application/json'
            },

            body: JSON.stringify({

              clientId:
                connectionData.clientId,

              password:
                connectionData.password,

              totp:
                connectionData.totp

            })

          }
        );

      const data =
        await response.json();

      if (!data.success) {

        toast.error(data.message);
        return;

      }

      setAlgoRunning(true);

      toast.success('AI Engine Started');

    } catch (error) {

      toast.error('Order Execution Failed');

    }

  };

  return (

    <div className="relative min-h-screen overflow-hidden bg-[#050914] text-white">

      {/* Background Effects */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-64 -left-64 h-[850px] w-[850px] rounded-full bg-cyan-500/10 blur-[220px]" />

        <div className="absolute top-0 right-[-250px] h-[900px] w-[900px] rounded-full bg-indigo-500/10 blur-[260px]" />

        <div className="absolute bottom-[-300px] left-1/2 h-[750px] w-[750px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[240px]" />

      </div>

      <div className="relative z-10">

        <Header />

        <main className="mx-auto max-w-[1650px] px-6 py-6">

          <div className="space-y-6">

            <StatusCards
              brokerConnected={brokerConnected}
              algoRunning={algoRunning}
            />

            <StatsCards
              runningPL={runningPL}
              availableBalance={availableBalance}
              runningTrades={runningTrades}
              currentTime={currentTime}
            />

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

              <MarketSelector
                tradingMode={tradingMode}
                setTradingMode={setTradingMode}
                selectedPair={selectedPair}
                setSelectedPair={setSelectedPair}
              />

              <BrokerPanel
                connectionData={connectionData}
                setConnectionData={setConnectionData}
                brokerConnected={brokerConnected}
                connectBroker={connectBroker}
                disconnectBroker={disconnectBroker}
                algoRunning={algoRunning}
                toggleAlgo={toggleAlgo}
              />

            </div>

            <AIEngineStatus />

            <ActiveTrades />

            <div className="relative overflow-hidden rounded-[30px] border border-cyan-500/20 bg-gradient-to-br from-[#1a2134] via-[#141b2d] to-[#0f172a] p-6 backdrop-blur-3xl">

              <div className="absolute -top-24 right-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-[120px]" />

              <div className="flex items-center justify-between mb-5">

                <div>

                  <h2 className="text-[28px] font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                    Live Positions
                  </h2>

                  <p className="text-slate-400 mt-1">
                    Active trades from Angel One
                  </p>

                </div>

                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300 text-sm">
                  {positions.length} Active
                </span>

              </div>

              {positions.length===0 ? (

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] py-10 text-center text-slate-500">
                  No Active Positions
                </div>

              ) : (

                positions.map((trade,index)=>(

                  <div key={index} className="mb-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:border-cyan-400/30">

                    <div className="flex justify-between items-center">

                      <div>

                        <div className="font-semibold text-white">{trade.tradingsymbol}</div>

                        <div className="text-sm text-slate-500 mt-1">
                          Avg ₹ {trade.averageprice}
                        </div>

                      </div>

                      <span className="rounded-full bg-blue-500/15 border border-blue-500/20 px-3 py-1 text-blue-300 text-sm">
                        Qty {trade.netqty}
                      </span>

                    </div>

                    <div className="mt-4 flex justify-end">

                      <span className={`rounded-full px-4 py-2 text-sm font-semibold ${Number(trade.pnl)>=0?'bg-emerald-500/15 text-emerald-300':'bg-red-500/15 text-red-300'}`}>
                        ₹ {trade.pnl}
                      </span>

                    </div>

                  </div>

                ))

              )}

            </div>


          </div>

        </main>

      </div>

    </div>

  );

};

export default ClientDashboard;