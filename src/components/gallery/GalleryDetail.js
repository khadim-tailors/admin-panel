import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ButtonHeader from '../../common/ButtonHeader';
import Loader from '../../common/Loader';
import AddImage from './AddImage';

function GalleryDetail() {
    const [galleryImages, setGalleryImages] = useState(null);
    const {folderName} = useParams();
    const [createMode, setCreateMode] =  useState(false)
    useEffect(() => {
        axios.get(`http://localhost:5001/khadim-tailors/us-central1/gallery/folder/${folderName}`).then(response=>{
        if(response.data.status){
            setGalleryImages(response.data.result);
        }else{
            console.log("Wrong response received from the api", response.data.message)
        }
        }).catch(err=>{
            console.log(err)
        })
    },[]);

    const handleCreateMode = () => setCreateMode(!createMode)
    const deleteImage = (id) =>{
        axios.post("http://localhost:5001/khadim-tailors/us-central1/gallery/deleteImage", {id, folderName}).then(response=>{
            console.log(response.data.message)
            console.log(response.data.result)
        })
    }

    return (<>
        {
            createMode ? <AddImage /> : 
            <div className="galleryDetailContainer">
            <ButtonHeader link="/gallery" handleCreateMode={handleCreateMode}/>
            <h4 className="text-uppercase">{folderName}</h4>
        <div className="__images">
            {
               galleryImages ?  galleryImages.images.map((img,index)=> {
                   return ( 
                   <div className="__img">
                        <div className="__deleteIcon" onClick={()=>deleteImage(img.id)}><i className="fas fa-trash-alt"></i></div>
                        <img src={img.url} alt="" />
                   </div>)
               }) : <Loader/>
            }            
        </div>
    </div>
        }
        </>)
    
    
    
}

export default GalleryDetail
