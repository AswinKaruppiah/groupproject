import { Route, Routes } from "react-router-dom";
import Product from "./UI/Display/Products/Product";
import LandingPage from "./UI/LandingPage/LandingPage";
import Nav from "./UI/Nav/Nav";
import Reg from "./UI/Reg/Reg";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/reg" element={<Reg />} />
      </Routes>
    </div>
  );
}

export default App;

// import { useState } from "react";
// let productdata = [
//   {
//     name: "",
//   },
// ];

//   const [name, setname] = useState();
//   let arr = JSON.parse(localStorage.getItem("data")) || [];
//   function storedata(event) {
//     productdata[0].name = event.target.value;
//     setname(productdata);
//   }
//   console.log(name);
//   function test() {
//     arr.push(name);
//     localStorage.setItem("data", JSON.stringify(arr));
//   }
//    <input className="data" type="text" onChange={storedata} />
//       <input type="button" value="ok" onClick={test} />
