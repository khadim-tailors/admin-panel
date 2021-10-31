import React from 'react'

function PlanCard({planDetail}) {
    return (
        <div className="col-xxl-3 col-xl-4 col-lg-4 col-6">
            <div className={`planBoxContainer _${planDetail.name.toLowerCase()}`}>
                <h4>{planDetail.name}</h4>
                <h5><span>Price:</span> {planDetail.currency} {planDetail.price}</h5>
                <p className="card-text">Orders : {planDetail.total_order_count}</p>
                <p className="card-text">Validity : {planDetail.expire_in_months}Month</p>
                <p className="card-text">Price :</p>
                <ul className="_options">
                    <li>Order Management <i className="fas fa-check ml-2"></i></li>
                    <li>Customer Management <i className="fas fa-check ml-2"></i></li>
                    <li>Measuremnts <i className="fas fa-check ml-2"></i></li>
                    <li>Payments  <i className="fas fa-check ml-2"></i></li>
                    <li>Billing <i className="fas fa-check ml-2"></i></li>
                    <li>Good and Service Tax (GST) <i className="fas fa-check ml-2"></i></li>
                    <li>Gallery  <i className="fas fa-check ml-2"></i></li>
                    <li>Financial Reprots <i className="fas fa-check ml-2"></i></li>
                    <li>Task Management <i className="fas fa-check ml-2"></i></li>
                    <li>Free Upgrades <i className="fas fa-check ml-2"></i></li>
                    <li>Custom Data Backup <i className="fas fa-check ml-2"></i></li>
                    <li>Data Security and Privacy <i className="fas fa-check ml-2"></i></li>
                    <li>Multi Device Support <i className="fas fa-check ml-2"></i></li>
                </ul>
                <div className="btnContainer">
                    <button className="btn btn-primary mr-1"><i className="mr-2 fas fa-pencil-alt"></i> Edit Plan</button>
                    <button className="btn btn-outline-primary ml-1"><i className="mr-2 fas fa-trash-alt"></i> Delete Plan</button>
                </div>
            </div>
        </div>
    )
}

export default PlanCard
