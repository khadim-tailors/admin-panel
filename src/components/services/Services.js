import React from 'react'
import { useHistory } from 'react-router'
import ButtonHeader from '../../common/ButtonHeader';
import ServiceCard from './ServiceCard'


function Services() {
    const history = useHistory();
    const handleOnCreateMode = () =>{
        console.log("Inside functions")
        history.push("/services/create-new")
    }
    return (
        <div className="mainContent-container">
            <ButtonHeader handleCreateMode={handleOnCreateMode} />
            <div className="row g-3 mt-2">
                <ServiceCard />
            </div>
        </div>
    )
}

export default Services
