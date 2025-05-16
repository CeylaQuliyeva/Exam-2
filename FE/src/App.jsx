
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Admin from "./pages/Admin";
import AdminAdd from "./pages/AdminAdd";
import Detail from "./pages/Detail";
import MainLayout from "./Layout/MainLayout";
import { HelmetProvider } from 'react-helmet-async';
import './App.css'
import Favorite from "./pages/Favorite";
import Basket from "./pages/Basket";

function App() {


  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="admin" element={<Admin />} />
              <Route path="adminadd" element={<AdminAdd />} />
              <Route path="detail/:id" element={<Detail />} />
              <Route path="favorite" element={<Favorite />} />
              <Route path="basket" element={<Basket />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App
