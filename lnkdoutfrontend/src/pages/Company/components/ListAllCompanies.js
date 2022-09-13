import React, {useEffect, useState, useRef} from 'react';
import {getData} from "../../../util/Fetch";
import "../assets/CompanyList.css"
import {Link} from "react-router-dom";
import {FaRegEnvelope, FaHeart} from "react-icons/fa";

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

    const CompanyCard = ({id, name, email, city, phone}) => {
        return (
            <Link className={"Link"} style={{textDecoration: 'none'}} to={`/company/profile/${id}`}>
            <div className={"companyCard"}>
                <div className={"CompanyInfo"}>
                <p className={"companyName"}>{name}<span> in {city}</span></p>
                <p><span>Contact info: {email}</span></p>
                <p>Phone: {phone}</p>
                </div>
                <FaHeart className={"heart"}/>
                <FaRegEnvelope className={"envelope"}/>
            </div>
            </Link>
        );
    }

    const createCard = (company, key) => <CompanyCard key={key} name={company.name} city={company.city}
                                                      phone={company.phone}
                                                      email={company.email}
                                                      id={company.id}
    />

    const cardList = companies === undefined ? "Loading..." : companies.map(company => createCard(company, company.id));

    return (
        <div className={"AllCompanyContainer"}>
            <h2 className={"AllCompanyHeader"}>List of all available Companies</h2>
            {cardList}
        </div>
    );
}

export default ListAllCompanies;