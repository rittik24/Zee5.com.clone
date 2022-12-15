import "./App.css";
import AllRoutes from './routs/AllRoutes';
import Navbar from "./components/rittik_navbar/Navbar";
// import Login from "./components/sajan_loginfooter/Login";
// import Register from "./components/sajan_loginfooter/Register";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      {/* <Login/> */}
      {/* <Register/> */}
    </div>
  );
}

export default App;
