import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ElectricNav from "./Components/Navbar/Navigation";
import ElectricUser from "./Components/User/AddUser";
import ElectricTarif from "./Components/Admin/AddTariff";
import Ehome from "./Components/Home/Home";
import Calculator from "./Components/Calculation/Calculator";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ElectricNav />
        <Routes>
          <Route exact path="/" element={<Ehome />}></Route>
          <Route exact path="/Calculator" element={<Calculator />}></Route>
          <Route exact path="/User" element={<ElectricUser />}></Route>
          <Route exact path="/Tarif" element={<ElectricTarif />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
