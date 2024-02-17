import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="./pages/Product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
