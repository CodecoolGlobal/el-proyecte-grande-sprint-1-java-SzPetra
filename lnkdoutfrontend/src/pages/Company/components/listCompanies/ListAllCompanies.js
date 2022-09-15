import React, {useEffect, useState, useRef} from 'react';
import {getData} from "../../../../util/Fetch";
import "../../assets/CompanyList.css"
import SearchItem from "./components/SearchItem";
import Content from "./components/Content";

function ListAllCompanies() {

    const [companies, setCompanies] = useState([]);
    const [search, setSearch] = useState('');

    const effectRan = useRef(false);

    useEffect(() => {
        if (effectRan.current === false) {
            const fetchCompanies = async () => {
                let data = await getData('api/get-all');
                console.log(data);
                setCompanies(data);
            }
            fetchCompanies().then(() => console.log('hello'));
            return () => {
                effectRan.current = true;
            }
        }
    }, []);

    return (
        <div className={"AllCompanyContainer"}>
            <h2 className={"AllCompanyHeader"}>List of all available Companies</h2>
            <SearchItem
                search={search}
                setSearch={setSearch}
            />
            <Content
                companies={companies.filter(company => ((company.name).toLowerCase()).includes(search.toLowerCase()))}
                setCompanies={setCompanies}
            />
        </div>
    );
}

export default ListAllCompanies;