import React from 'react'

function NewPlan() {
    return <div className="formContainer">
        <div className="formSubContainer _500">
            <h5 className="d-flex justify-content-between _heading align-items-center">
                Edit/Add New Plan
                <div className="closePopup">&times;</div>
            </h5>
            <form className="" onSubmit="">
                <div className="row gy-3">
                    <div className="form-group">
                        <label htmlFor="inputEmail4" className="form-label">Plan Name</label>
                        <input type="text" name="shopName" value="" onChange="" className="form-control" placeholder="eg. Basic" />
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="inputEmail4" className="form-label">Price</label>
                            <input type="number" name="shopName" value="" onChange="" className="form-control" placeholder="eg. 2999" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="inputEmail4" className="form-label">Total Orders</label>
                            <input type="number" name="shopName" value="" onChange="" className="form-control" placeholder="eg. 9999" />
                        </div>
                    </div>                

                    <hr />
                    <div className="d-flex justify-content-between align-items-end">
                        <div className="form-group w-100">
                            <label htmlFor="formFile" className="form-label">Add Plan Points</label>
                            <input type="text" name="shopName" value="" onChange="" className="form-control" placeholder="eg. 9999" />
                        </div>
                        <div className="d-flex justify-content-end text-nowrap ml-4">
                            <button className="btn btn-primary">Add New <i className="fas fa-plus ml-3 fz-14"></i></button>
                        </div>
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary w-100 btn-lg text-uppercase">Save</button>
                    </div>
                </div>
            </form>
        </div>            
    </div>
}

export default NewPlan
