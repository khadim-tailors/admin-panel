import React from 'react'
import ButtonHeader from '../../common/ButtonHeader'
import {useHistory} from 'react-router-dom'
function Measurements() {
    const history = useHistory()
    const handleCreateMode = () =>{
        history.push("/measurements/create-new")
    }

    return (
        <div className="mainContent-container">
            <ButtonHeader handleCreateMode={handleCreateMode}/>
            <div className="row g-3 mt-2">
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-6">
                    <div className="measurementCard d-flex justify-content-between align-items-center">
                        <div className="cntnt">
                            <h5  className="mb-0">Shirt Measurements</h5>
                        </div>
                        <div className="_icon">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-6">
                    <div className="measurementCard d-flex justify-content-between align-items-center">
                        <div className="cntnt">
                            <h5  className="mb-0">Shirt Measurements</h5>
                        </div>
                        <div className="_icon">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-6">
                    <div className="measurementCard d-flex justify-content-between align-items-center">
                        <div className="cntnt">
                            <h5  className="mb-0">Shirt Measurements</h5>
                        </div>
                        <div className="_icon">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-6">
                    <div className="measurementCard d-flex justify-content-between align-items-center">
                        <div className="cntnt">
                            <h5  className="mb-0">Shirt Measurements</h5>
                        </div>
                        <div className="_icon">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Measurements
