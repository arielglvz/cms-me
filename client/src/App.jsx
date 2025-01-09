import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Loader from "./components/Loader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  HideLoading,
  ReloadData,
  SetPortfolioData,
  ShowLoading,
} from "./redux/rootSlice";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Admin/Login";

function App() {
  const { loading, portfolioData, reloadData } = useSelector(
    (state) => state.root
  );
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
        dispatch(ShowLoading(true));
        const response = await axios.get("/api/portfolio/get-portfolio-data");
        dispatch(SetPortfolioData(response.data));
        dispatch(ReloadData(false));
        dispatch(HideLoading());
    } catch (error) {
        console.error("Error fetching portfolio data:", error.response ? error.response.data : error.message);
        dispatch(HideLoading());
    }
};

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  useEffect(() => {
    if (reloadData) {
      console.log('reloaded')
      getPortfolioData();
    }
  }, [reloadData]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
