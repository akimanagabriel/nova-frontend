import LandingPage from "./app/LandingPage";
import Footer from "./shared/Footer";
import TopHeader from "./shared/TopHeader";

function App() {
  return (
    <div className="text-slate-700">
      <TopHeader/>
      <LandingPage/>
      <Footer/>
    </div>
  )
}

export default App;