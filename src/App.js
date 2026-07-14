import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import ClientActivation from './pages/ClientActivation';
import ClientDashboard from './pages/ClientDashboard';
import { Toaster } from 'react-hot-toast';

function App() {

  const isActivated =
    localStorage.getItem('licenseActivated') === 'true';

  return (

    <>
    <Toaster position="top-right" toastOptions={{duration:3000,style:{background:'#0f172a',color:'#fff',border:'1px solid rgba(34,211,238,.35)',backdropFilter:'blur(18px)',boxShadow:'0 0 25px rgba(34,211,238,.25)',borderRadius:'16px'}}}/>
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            isActivated
              ? <Navigate to="/dashboard" />
              : <ClientActivation />
          }
        />

        <Route
          path="/dashboard"
          element={
            isActivated
              ? <ClientDashboard />
              : <Navigate to="/" />
          }
        />

      </Routes>

    </BrowserRouter>
    </>

  );

}

export default App;