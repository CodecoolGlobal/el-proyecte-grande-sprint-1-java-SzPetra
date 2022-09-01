import './assets/App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import CompanyRegistration from "./pages/Company/components/CompanyRegistration";
import LandingPage from "./pages/LandingPage/LandingPage";
import StudentRegistration from "./pages/Student/components/StudentRegistration";
import Header from "./components/Header";
import NoPage from "./pages/NoPage";
import ListAllCompanies from "./pages/Company/components/ListAllCompanies";
import CompanyPageLayout from "./pages/Company/components/CompanyPageLayout";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Header />}>
              <Route index element={<LandingPage />} />
              <Route path="student">
                  <Route index  element={<StudentRegistration />} />
                  <Route path="list-all" />
                  <Route path="registration" element={<StudentRegistration />} />
                  <Route path="*" element={<NoPage />} />
              </Route>
              <Route path="company">
                  <Route index element={<CompanyPageLayout />} />
                  <Route path="list-all" element={<ListAllCompanies />}/>
                  <Route path="registration" element={<CompanyRegistration />} />
                  <Route path="*" element={<NoPage />} />
              </Route>
              <Route path="*" element={<NoPage />} />
          </Route>
      </Routes>
  );
}


export default App;
