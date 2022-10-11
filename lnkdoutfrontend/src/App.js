import './assets/App.css';
import React, {createContext} from "react";
import {Routes, Route} from "react-router-dom";
import CompanyRegistration from "./pages/Company/components/CompanyRegistration";
import LandingPage from "./pages/LandingPage/LandingPage";
import StudentRegistration from "./pages/Student/components/StudentRegistration";
import Header from "./components/Header";
import NoPage from "./pages/NoPage";
import ListAllCompanies from "./pages/Company/components/listCompanies/ListAllCompanies";
import CompanyPageLayout from "./pages/Company/components/CompanyPageLayout";
import CompanyProfile from "./pages/Company/components/CompanyProfile";
import StudentProfile from "./pages/Student/components/StudentProfile";
import ListAllStudents from "./pages/Student/components/listStudents/ListAllStudents";
import StudentPageLayout from "./pages/Student/components/StudentPageLayout";
import Inbox from "./pages/inbox/components/Inbox";
import SendMessage from "./pages/inbox/components/SendMessage";
import {useState} from "react";
import Login from "./pages/Login/Login";
import EditStudentProfile from "./pages/Student/components/listStudents/EditStudentProfile";

export const EditValue = createContext();
function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("user") !== null);
    const [edited, setEdited] = useState(false);

    return (

        <EditValue.Provider value={{edited, setEdited}}>
            <Routes>
                <Route path="login" element={<Login
                    setIsLoggedIn={setIsLoggedIn}/>} />
                <Route path="/" element={
                    <Header
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    />
                }>
                    <Route index element={<LandingPage/>}/>
                        <Route path="student">
                            <Route index element={<StudentPageLayout/>}/>
                            <Route path="list-all" element={<ListAllStudents/>}/>
                            <Route path="registration" element={<StudentRegistration/>}/>
                            <Route path="profile/:id" element={<StudentProfile/>}/>
                            <Route path="profile/edit" element={<EditStudentProfile />} />
                            <Route path="" element={<NoPage/>}/>
                        </Route>
                    <Route path="inbox/:id">
                        <Route index element={<Inbox/>}/>
                        <Route path="send-message" element={<SendMessage/>}/>
                    </Route>
                    <Route path="company">
                        <Route index element={<CompanyPageLayout/>}/>
                        <Route path="list-all" element={<ListAllCompanies/>}/>
                        <Route path="registration" element={<CompanyRegistration/>}/>
                        <Route path="profile/:id" element={<CompanyProfile/>}/>
                        <Route path="" element={<NoPage/>}/>
                    </Route>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </EditValue.Provider>

    );
}


export default App;
