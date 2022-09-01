import React, {useEffect, useState, useRef} from 'react';
import {getData} from "../../../util/Fetch";
import "../assets/CompanyList.css"

function ListAllCompanies() {

    const [companies, setCompanies] = useState([]);

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

    const CompanyCard = ({name, email, city, phone}) => {
        return (
            <div className={"companyCard"}>
                <p>{name} in {city}</p>
                <p><span>Contact info: {email}</span></p>
                <p>Phone: {phone}</p>
            </div>
        );
    }

    const createCard = (company, key) => <CompanyCard key={key} name={company.name} city={company.city}
                                                      phone={company.phone}
                                                      email={company.email}/>

    const cardList = companies === undefined ? "Loading..." : companies.map(company => createCard(company, company.name));

    const handleCheck = (id) => {
        const listItems = companies.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
        setCompanies(listItems)
    }

    return (
        <div>
            {cardList}
            {/*<CompanyContent*/}
            {/*    companies={companies}*/}
            {/*    handleCheck={handleCheck}*/}
            {/*/>*/}
        </div>
    );
}

export default ListAllCompanies;