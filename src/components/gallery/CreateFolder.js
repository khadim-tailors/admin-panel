import axios from 'axios';
import React, { useState } from 'react'
import { imageUpload } from '../../common/Common';
import {useHistory} from 'react-router-dom'
import { Alert } from '../../common/alerts';

function CreateFolder({handleCreateMode}) {
    const [imageAsFile, setImageAsFile] = useState(null);
    const [folderName, setFolderName] = useState("");
    const history = useHistory();
    const handleImage = (event) =>{
        const image = event.target.files[0]
        setImageAsFile(imageFile => (image))
    }

    const folderNameHandler = (event) =>{
        console.log(event.target.value)
        setFolderName(event.target.value)
    }
    
    const saveImageInGallery = async() =>{
        const folder = folderName.toLowerCase();
        const image = await imageUpload(imageAsFile,"gallery");
        console.log({folder, image})
        axios.post("http://localhost:5001/khadim-tailors/us-central1/gallery/addFolder",{folder, image}).then(response =>{
            if(response.data.status){
                setImageAsFile(null);
                setFolderName("")
                Alert("Folder Added Successfully", "success");
                handleCreateMode();
            }else{
                alert("Error")
            }
        }).catch(err =>{
           console.log(err)
        })
    }

    return <div className="formContainer">
        <div className="formSubContainer galleryFormContainer">
            <h5 className="d-flex justify-content-between _heading">
                Add New Folder
                <div className="closePopup" onClick={handleCreateMode}>&times;</div>
            </h5>
            <form className="">
                <div className="row gy-3">
                    <div className="form-group">
                        <label htmlFor="inputEmail4" className="form-label">Folder Name</label>
                        <input type="text" name="shopName" defaultValue={folderName} className="form-control" onChange={folderNameHandler} placeholder="eg. Sherwani" />
                    </div>
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
}

export default CreateFolder
