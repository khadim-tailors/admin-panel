import React, {useState, useEffect} from 'react'

import axios from 'axios'

function Plans() {
    const [isLoading, setIsLoading] = useState(false);
    const [plans, setPlans] = useState([])
    useEffect(() => {
        setIsLoading(true)
        axios.get("https://us-central1-khadim-tailors.cloudfunctions.net/plans/fetchPlans").then(response=>{
            const data = response.data;
            if(data.status){
                setPlans(data.result)
                console.log(data.result)
            }
        }).catch(err=>{
                setIsLoading(false)
        })
    }, [])

    return (
    <div className="mainContent-container d-flex justify-content-between">
    {
        plans.map(plan=>(
        <div className="card w-30" key={plan.name}>
          <h5 className="card-title text-center">
          {plan.name}
          </h5>
            <div className="card-body my-2">
             <p className="card-text">Orders : {plan.total_order_count}</p>
             <p className="card-text">Validity : {plan.expire_in_months}Month</p>
             <p className="card-text">Price : {plan.price} {plan.currency}</p>
             <button className="btn btn-primary mx-2">Edit Plan</button>
             <button className="btn btn-danger mx-2">Delete Plan</button>
            </div>
         </div>
        ))
    }
    </div>
    )
}

export default Plans
