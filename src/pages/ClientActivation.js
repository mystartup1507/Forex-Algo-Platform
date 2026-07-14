import React, { useState } from 'react';

const ClientActivation = () => {

  const [licenseKey, setLicenseKey] = useState('');
  const [message, setMessage] = useState('');

  const getDeviceId = () => {

    let deviceId = localStorage.getItem('deviceId');

    if (!deviceId) {

      deviceId = crypto.randomUUID();

      localStorage.setItem(
        'deviceId',
        deviceId
      );

    }

    return deviceId;

  };

  const activateLicense = async () => {

    try {

      const deviceId = getDeviceId();

      console.log("Device ID:", deviceId);
      console.log("License:", licenseKey);

      const payload = {
        licenseKey: licenseKey.trim(),
        deviceId
      };

      console.log("Payload:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/license/validate`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      );

      const data = await response.json();

      if (data.success) {

        localStorage.setItem(
          'licenseActivated',
          'true'
        );

        localStorage.setItem(
          'licenseKey',
          licenseKey.trim()
        );

        window.location.href = '/dashboard';

      } else {

        setMessage(data.message);

      }

    } catch (error) {

      console.error(error);

      setMessage('Server Error');

    }

  };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center text-white">

      <div className="bg-zinc-900 p-10 rounded-3xl border border-purple-500 w-[400px]">

        <h1 className="text-4xl font-bold text-center text-purple-400 mb-8">
          Forex Algo Platform
        </h1>

        <p className="text-center text-zinc-400 mb-8">
          Enter License Key
        </p>

        <input
          type="text"
          placeholder="FAP-XXXXXXX"
          value={licenseKey}
          onChange={(e) => setLicenseKey(e.target.value)}
          className="w-full p-4 rounded-xl bg-zinc-800 mb-6 outline-none"
        />

        <button
          onClick={activateLicense}
          className="w-full bg-purple-600 hover:bg-purple-700 p-4 rounded-xl text-lg font-bold"
        >
          Activate
        </button>

        {message && (
          <p className="text-red-400 mt-6 text-center">
            {message}
          </p>
        )}

      </div>

    </div>

  );

};

export default ClientActivation;