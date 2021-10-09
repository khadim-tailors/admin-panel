import React from 'react'

function MonthlyStats() {    
    return <div className="col-4">
        <div className="dashboard-box d-flex justify-content-between align-items-center __increased">
            <div className="__head">
                <h6 className="text-uppercase">Total Tailors</h6>
                <h2>500</h2>
                <div className="lastMonthUpdates d-flex align-items-center mt-2">
                    <i className="fas fa-arrow-up"></i>
                    <span className="percentage">12%</span>
                    <span className="txt">Since Last Month</span>
                </div>
            </div>
            <div className="__icon">
                <i className="fas fa-users"></i>
            </div>
        </div>
    </div>
}

export default MonthlyStats
