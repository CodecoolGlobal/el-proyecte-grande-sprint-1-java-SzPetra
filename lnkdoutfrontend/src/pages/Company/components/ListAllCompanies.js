import React, {useEffect, useState} from 'react';
import CompanyContent from "./CompanyContent";
import {getData} from "../../../util/Fetch";

function ListAllCompanies() {

    const [companies, setCompanies] = useState(undefined);

    useEffect(() => {
        let cancelled = false;
        const fetchCompanies = async () => {
            let data = await getData('company/api/get-all');
            if (!cancelled) {
                setCompanies(oldData => oldData !== undefined ? [...oldData, ...data] : data);
            }
        }
        const cleanup = () => {
            cancelled = true;
        }
        fetchCompanies();
        return cleanup;
    }, [])

    const CompanyCard = ({name, email, city, phone}) => {
        return (
            <div className={"companyCard"}>
                <p>{name} in {city}</p>
                <p>Contact info: {email} </p>
                <p>Phone: {phone}</p>
            </div>
        );
    }

    const createCard = (company, key) => <CompanyCard key={key} name={company.name} city={company.city} phone={company.phone}
                                                      email={company.email} />

    const cardList = companies === undefined ? "Loading..." : companies.map(company => createCard(company, company.name));

    const handleCheck = (id) => {
        const listItems = companies.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
        setCompanies(listItems)
    }

    return (
        <div>
        {cardList}
        <CompanyContent
            companies={companies}
            handleCheck={handleCheck}
        />
        </div>
    );
}

export default ListAllCompanies;