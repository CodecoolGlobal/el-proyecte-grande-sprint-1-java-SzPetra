import './assets/App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import CompanyRegistration from "./pages/Company/components/CompanyRegistration";
import LandingPage from "./pages/LandingPage/LandingPage";
import StudentPage from "./pages/Student/StudentPage";
import Header from "./components/Header";
import NoPage from "./pages/NoPage";
import ListAllCompanies from "./pages/Company/components/ListAllCompanies";
import CompanyPageLayout from "./pages/Company/components/CompanyPageLayout";
import CompanyProfile from "./pages/Company/components/CompanyProfile";
import StudentProfile from "./pages/Student/components/StudentProfile";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Header />}>
              <Route index element={<LandingPage />} />
              <Route path="student">
                  <Route index  element={<StudentPage />} />
                  <Route path="list-all" />
                  <Route path="registration" element={<StudentPage />} />
                  <Route path="profile/:id" element={<StudentProfile />} />
                  <Route path="*" element={<NoPage />} />
              </Route>
              <Route path="company">
                  <Route index element={<CompanyPageLayout />} />
                  <Route path="list-all" element={<ListAllCompanies />}/>
                  <Route path="registration" element={<CompanyRegistration />} />
                  <Route path="profile/:id" element={<CompanyProfile />} />
                  <Route path="*" element={<NoPage />} />
              </Route>
              <Route path="*" element={<NoPage />} />
          </Route>
      </Routes>
  );
}


export default App;
