import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MonthlyStats from './MonthlyStats'
import MultiSeriesChart from './MultiSeriesChart'
import VerticalBar from './VerticalBar'

function Dashboard() {
    const [numberOfTailors, setNumberOfTailors] = useState({})
    useEffect(() => {
        axios.get("http://localhost:5001/khadim-tailors/us-central1/dashboards/getNumberOfTailors").then(res=>{
            const {data} = res;
            console.log(data.result)
            if(data.status) setNumberOfTailors(res.result)
        })
     },[])
    return <div className="mainContent-container">
        <div className="row gy-3 gx-3">
            { 
              numberOfTailors?.customerCountLastMonth ? 
              <MonthlyStats type="tailors" numberOfTailors={numberOfTailors}/>
              : ''
            }
            <MonthlyStats type="customers"/>
            <MonthlyStats type="income"/>
                            
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
