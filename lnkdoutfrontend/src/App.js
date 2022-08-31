import './assets/App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import CompanyPage from "./pages/Company/components/CompanyPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import StudentPage from "./pages/Student/StudentPage";
import Header from "./components/Header";
import NoPage from "./pages/NoPage";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Header />}>
              <Route index element={<LandingPage />} />
              <Route path="student">
                  <Route index  element={<StudentPage />} />
                  <Route path="list-all" />
                  <Route path="registration" element={<StudentPage />} />
                  <Route path="*" element={<NoPage />} />
              </Route>
              <Route path="company" element={<CompanyPage />}>
                  <Route index element={<CompanyPage />} />
                  <Route path="list-all" />
                  <Route path="registration" element={<CompanyPage />} />
                  <Route path="*" element={<NoPage />} />
              </Route>
              <Route path="*" element={<NoPage />} />
          </Route>
      </Routes>
  );
}


export default App;
