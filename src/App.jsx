import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import PageNav from "./components/PageNav";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryLIst";
const BASE_URL = "http://localhost:9000";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCitiesData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        const data = await res.json();

        if (data) {
          setCities(data);
        } else {
          throw new Error("Problem in fetching the user data");
        }
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCitiesData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* index for making default route */}
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          {/* Default route */}
          <Route
            index="cities"
            element={<CityList isLoading={isLoading} cities={cities} />}
          />
          <Route
            path="cities"
            element={<CityList isLoading={isLoading} cities={cities} />}
          />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        {/* path="*" works if note any route present*/}
        <Route path="/page-nav" element={<PageNav />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
