import React from 'react'
import ButtonHeader from '../../common/ButtonHeader'

function NewMeasurement() {
    return (
    <>
    <ButtonHeader hideAddNew={true} link={"/measurements"}/>
    <div className="formContainer">
        <div className="formSubContainer servicesFormContainer">
            <h5 className="d-flex justify-content-between _heading">
                Add New Measurement
                <div className="closePopup">&times;</div>
            </h5>
            <form className="" onSubmit="">
                <div className="row gy-3">
                    <div className="col-12">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Service</option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="formFile" className="form-label">Title Name</label>
                                <input type="text" name="shopName" value="" onChange="" className="form-control" placeholder="eg. Pocket Type" />
                            </div>
                            <div className="col-8">
                                <label htmlFor="formFile" className="form-label">Upload Icon</label>
                                <input className="form-control" onChange="" type="file" id="formFile" />
                            </div>
                        </div>
                        <button className="btn btn-primary mt-3">Add New <i className="fas fa-plus ml-3 fz-14"></i></button>
                    </div>
                    <div class="col-12 d-flex justify-content-center mt-4">
                        <button type="submit" class="btn btn-primary w-100 btn-lg text-uppercase">Save</button>
                    </div>
                </div>
            </form>
        </div>            
    </div>
    </>
    )
}

export default NewMeasurement
