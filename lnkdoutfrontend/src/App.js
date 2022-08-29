import './assets/App.css';
import React from "react";
import {
    Routes,
    Route, BrowserRouter,
} from "react-router-dom";
import CompanyPage from "./pages/Company/components/CompanyPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import StudentPage from "./pages/Student/StudentPage";
import Layout from "./components/Layout";
import NoPage from "./pages/NoPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<LandingPage />} />
                  <Route path="student" element={<StudentPage />} />
                  <Route path="company" element={<CompanyPage />} />
                  <Route path="*" element={<NoPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}


export default App;
