import React from 'react'

function ServiceCard() {
    return (
        <div className="col-xxl-3 col-xl-4 col-lg-4 col-6">
            <div className="serviceCard d-flex justify-content-between align-items-center">
                <div className="cntnt">
                    <h5>Service Name</h5>
                    <p className="mb-0">10 Design options added</p>
                </div>
                <div className="_icon">
                    <i className="fas fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
