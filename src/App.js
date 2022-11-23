import LandingPage from "./app/LandingPage";
import Footer from "./shared/Footer";
import TopHeader from "./shared/TopHeader";
import { useEffect } from 'react';
import api from './config/basicConfig';
import { gapi } from "gapi-script";
import { useSelector } from 'react-redux';



function App() {
  // initialise google login
  useEffect(() => {
    function start() {
      gapi.client.init({ clientId: api.googleClientId });
    }
    gapi.load("client:auth2", start);
  }, []);

  const { isLoggedIn } = useSelector(state => state.auth)

  return (
    <div className="text-slate-700">
      <TopHeader/>
      <LandingPage />
      <Footer/>
    </div>
  )
}

export default App;