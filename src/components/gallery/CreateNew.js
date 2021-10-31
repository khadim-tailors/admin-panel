import React from 'react'

function CreateNew() {
    return <div className="formContainer">
        <div className="formSubContainer galleryFormContainer">
            <h5 className="d-flex justify-content-between _heading">
                Add New Folder
                <div className="closePopup">&times;</div>
            </h5>
            <form className="" onSubmit="">
                <div className="row gy-3">
                    <div className="form-group">
                        <label htmlFor="inputEmail4" className="form-label">Shop Name</label>
                        <input type="text" name="shopName" value="" onChange="" className="form-control" placeholder="eg. Khadim Tailors" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formFile" className="form-label">Select Folder Thumbnail</label>
                        <input className="form-control" onChange="" type="file" id="formFile" />
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary w-100 btn-lg text-uppercase">Save</button>
                    </div>
                </div>
            </form>
        </div>            
    </div>
}

export default CreateNew
