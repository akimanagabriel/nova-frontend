import Body from "./app/Body";
import LeftBar from "./shared/LeftBar";
import RightBar from "./shared/RightBar";
import TopHeader from "./shared/TopHeader";

function App() {
  return (
    <div className="text-slate-700">
      {/* header */}
      <TopHeader />
      <div className="flex flex-col md:flex-row justify-between gap-0 px-5 ">
        <LeftBar />
        <Body/>
        <RightBar/>
      </div>
      
      {/* footer */}
    </div>
  )
}

export default App;