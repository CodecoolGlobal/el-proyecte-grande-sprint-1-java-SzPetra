import React, {useState} from 'react';
import CompanyContent from "./CompanyContent";

function ListAllCompanies() {

    const [companies, setCompanies] = useState([
        {
            id: 1,
            checked: false,
            company: 'RMB'
        },
        {
            id: 2,
            checked: true,
            company: 'Tigra'
        }
    ]);
    const handleCheck = (id) => {
        const listItems = companies.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
        setCompanies(listItems)
    }

    return (
        <div>
        <CompanyContent
            companies={companies}
            handleCheck={handleCheck}
        />
        </div>
    );
}

export default ListAllCompanies;