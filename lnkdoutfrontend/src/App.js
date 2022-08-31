import './assets/App.css';
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CompanyPage from "./pages/Company/components/CompanyPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import StudentPage from "./pages/Student/StudentPage";
import Header from "./components/Header";
import NoPage from "./pages/NoPage";
import ListAllCompanies from "./pages/Company/components/ListAllCompanies";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Header />}>
                  <Route index element={<LandingPage />} />
                  <Route path="student" element={<StudentPage />} />
                  <Route path="company" element={<ListAllCompanies />} />
                  <Route path="*" element={<NoPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}


export default App;
