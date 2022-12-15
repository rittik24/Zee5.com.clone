import "./App.css";
import AllRoutes from './routs/AllRoutes';
import Navbar from "./components/rittik_navbar/Navbar";
import Buyplan from "./components/moumita_buyplan/Buyplan";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <AllRoutes /> */}
      <Buyplan/>
    </div>
  );
}

export default App;
