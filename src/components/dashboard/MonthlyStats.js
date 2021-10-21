import React from 'react'

function MonthlyStats({type, numberOfTailors}) {     
     const types = {
         tailors:"Total Tailors",
         customres:"Total customers",
         income: "Total Income"
     }
    return <div className="col-4">
        <div className="dashboard-box d-flex justify-content-between align-items-center __increased">
            <div className="__head">
                <h6 className="text-uppercase">{types[type]}</h6>
                <h2>{type=== 'tailors' ?  numberOfTailors?.customerCountLastMonth : type === 'income' ? 'INR 3000' :''}</h2>
                <div className="lastMonthUpdates d-flex align-items-center mt-2">
                    <i className="fas fa-arrow-up"></i>
                    <span className="percentage">{type=== 'tailors' ?  numberOfTailors?.percentageGrowth : type === 'income' ? '30' :''}%</span>
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
