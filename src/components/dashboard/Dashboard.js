import React from 'react'
import MonthlyStats from './MonthlyStats'
import MultiSeriesChart from './MultiSeriesChart'
import VerticalBar from './VerticalBar'

function Dashboard() {
    return <div className="mainContent-container">
        <div className="row gy-3 gx-3">
            <MonthlyStats />
            <MonthlyStats />
            <MonthlyStats />
                            
            <div className="clear"></div>
            <div className="col-6">
                <VerticalBar/>
            </div>
            <div className="col-6">
                <MultiSeriesChart/>
            </div>
        </div>
    </div>
}

export default Dashboard
