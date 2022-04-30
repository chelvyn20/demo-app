import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoanForm } from "../../components/LoanForm";
import { NavBar } from "../../components/NavBar";
import { CodeLab } from "../CodeLab";
import { Home } from "../Home";
import { ShoppingCart } from "../ShoppingCart";
import { Marketplace } from "./../Marketplace";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/code-lab" element={<CodeLab />} />
        <Route exact path="/loan-form" element={<LoanForm />} />
        <Route exact path="/marketplace" element={<Marketplace />} />
        <Route exact path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
