import axios from 'axios';
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { Alert } from '../../common/alerts';
import { imageUpload } from '../../common/Common';

function AddImage() {
    const [imageAsFile, setImageAsFile] = useState(null);
    const {folderName} = useParams();
    const history = useHistory();

    const handleImage = (event) =>{
        const image = event.target.files[0]
        setImageAsFile(imageFile => (image))
    }

    const saveImageInGallery = async() =>{
        const image = await imageUpload(imageAsFile,"gallery");
        console.log(image)
        axios.post("http://localhost:5001/khadim-tailors/us-central1/gallery/addImage",{folderName, image}).then(response =>{
            if(response.data.status){
                setImageAsFile(null);
                Alert("Image Added Successfully", "success");
                history.push('/gallery')
            }else{
                alert("Error")
            }
        }).catch(err =>{
           console.log(err)
        })
    }

    return (
        <div className="formContainer">
        <div className="formSubContainer galleryFormContainer">
            <h5 className="d-flex justify-content-between _heading">
                Add New Image
                <div className="closePopup">&times;</div>
            </h5>
            <form className="">
                <div className="row gy-3">
                    <div className="form-group">
                        <label htmlFor="formFile" className="form-label">Select Image</label>
                        <input className="form-control" defaultValue={imageAsFile} type="file" id="formFile" onChange={handleImage}/>
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                        <button type="button" class="btn btn-primary w-100 btn-lg text-uppercase" onClick={saveImageInGallery}>Save</button>
                    </div>
                </div>
            </form>
        </div>            
    </div>
    )
}

export default AddImage
