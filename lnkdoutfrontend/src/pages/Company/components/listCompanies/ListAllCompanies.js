import React, {useEffect, useState, useRef} from 'react';
import {getData, postData} from "../../../../util/Fetch";
import "../../assets/CompanyList.css"
import SearchItem from "./components/SearchItem";
import Content from "./components/Content";
import "../../../../util/searchBar.css";

function ListAllCompanies() {

    const [companies, setCompanies] = useState([]);
    const [search, setSearch] = useState('');
    const [error, setError] = useState(false);

    const effectRan = useRef(false);

    useEffect(() => {
        if (effectRan.current === false) {
            const fetchCompanies = async () => {
                let data = await getData('/company');
                if(data.status){
                    setError(true)
                }
                setCompanies(data);
            }
            fetchCompanies().then(() => console.log('hello'));
            return () => {
                effectRan.current = true;
            }
        }
    }, []);


    const addFavoriteCompany = async (studentId, companyId) => {
        await postData(`/student/add-favorite-company/${6}`, companyId).then(()=> console.log("like"));
    }


    return (
            <>
                {error ? <p className={"login-error"}>You are not authorized to see this webpage!</p> : ( <div className={"AllCompanyContainer"}>
                    <h2 className={"AllCompanyHeader"}>List of all available Companies</h2>
                    <SearchItem
                        search={search}
                        setSearch={setSearch}
                    />
                    <Content
                        companies={companies.filter(company => ((company.name).toLowerCase()).includes(search.toLowerCase()))}
                        setCompanies={setCompanies}
                        addFavoriteCompany={addFavoriteCompany}
                    />
                </div>
            )}
            </>
    )


}

export default ListAllCompanies;