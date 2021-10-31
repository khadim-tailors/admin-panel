import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { days } from '../../common/utils';
import {Alert} from 'react-bootstrap'
import {storage} from "../../firebase"

function EditShop({shopDetail}) {
    console.log(shopDetail)
    const allInputs = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs);   

    useEffect(() => {
        try{
            if (imageAsFile === "") return
            const uploadTask = storage
              .ref(`/images/${imageAsFile.name}`)
              .put(imageAsFile);
            uploadTask.on(
              "state_changed",
              (snapShot) => {
                //takes a snap shot of the process as it is happening
                console.log(snapShot);
              },
              (err) => {
                //catches the errors
                console.log(err);
              },
              () => {
                // gets the functions from storage refences the image storage in firebase by the children
                // gets the download url then sets the image from firebase as the value for the imgUrl key:
                storage
                  .ref("images")
                  .child(imageAsFile.name)
                  .getDownloadURL()
                  .then((fireBaseUrl) => {
                      console.log("fireBaseUrl",fireBaseUrl);
                    setImageAsUrl((prevObject) => ({
                      ...prevObject,
                      imgUrl: fireBaseUrl,
                    }));
                  });
              }
            );
            console.log(uploadTask)
        }catch(e){
            console.log(e)
        }
        
    }, [imageAsFile])
    const handleImageAsFile = async (e) => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
    }

    const shopName = useRef(null);
    const phone = useRef(null);
    const email = useRef(null);
    const openAt = useRef(null);
    const closeAt = useRef(null);
    const daysOpen = useRef(null);
    const address = useRef(null);
    const city = useRef(null);
    const state = useRef(null);
    const zip = useRef(null);
    const website = useRef(null);
    const facebook = useRef(null);
    const instagram = useRef(null);
    const mapLocation = useRef(null);
    const [variant, setVariant] = useState(null)


    const handleShopSave = (event)=>{
        event.preventDefault();
        const form = {
            shopName: shopName.current.value,
            phone: phone.current.value,
            email: email.current.value,
            openAt: openAt.current.value,
            closeAt: closeAt.current.value,
            daysOpen: daysOpen.current.value,
            address: address.current.value,
            city: city.current.value,
            state: state.current.value,
            zip: zip.current.value,
            website: website.current.value,
            facebook: facebook.current.value,
            instagram: instagram.current.value,
        };
        if(imageAsUrl.imgUrl){
            form.avatarUrl = imageAsUrl.imgUrl;
            axios.post("http://localhost:5001/khadim-tailors/us-central1/shops/addShop", form).then((response)=>{
                if(response.data.status) setVariant("success") 
                else setVariant("error")
            }).catch((error)=>{
                setVariant("error")
            })
        }
        // setShopDetails(form)
       
        
    }

    return (
      <div className="formContainer">
        { variant ? <Alert key="1" variant={variant}>
        {variant === "success" ?  "Shop added successfully.": "Failed to save shop."} 
        </Alert> :''}
        <div className="formSubContainer" id={shopDetail.shop_id}>
          <h5 className="_heading"><i className="fas fa-pencil-alt"></i> Edit: Shop Details</h5>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label"> Shop Name </label>
              <input type="text" ref={shopName} className="form-control" placeholder="eg. Khadim Tailors" defaultValue={shopDetail.shopName} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label"> Phone Number </label>
              <input type="text" ref={phone} className="form-control" placeholder="eg. 7838367864" defaultValue={shopDetail.phone} />
            </div>
            <div className="col-6">
              <label htmlFor="inputAddress" className="form-label"> Email ID </label>
              <input type="email" ref={email} className="form-control" placeholder="example@gmail.com" defaultValue={shopDetail.email} />
            </div>
            <div className="col-md-3">
              <label htmlFor="inputEmail4" className="form-label"> Open At </label>
              <input type="time" ref={openAt} className="form-control" placeholder="00:00" defaultValue={shopDetail.openAt} />
            </div>
            <div className="col-md-3">
              <label htmlFor="inputEmail4" className="form-label"> Close At </label>
              <input type="time" ref={closeAt} className="form-control" placeholder="00:00" defaultValue={shopDetail.closeAt} />
            </div>
            <div className="col-12">
              <div className="d-flex justify-content-between">
                {days.map((day, index) => {
                    return <div className="form-check" key={index}>
                      <input ref={daysOpen} className="form-check-input" id={day.day} type="checkbox" />
                      <label className="form-check-label" htmlFor={day.day}>{day.day}{" "}</label>
                    </div>
                })}
              </div>
            </div>
            <div className="col-2">
                <div className="profileAvatar">
                    <img src={shopDetail.avatarUrl} alt={shopDetail.shopName} />
                </div>
            </div>
            <div className="col-10">
                <label htmlFor="formFile" className="form-label">Profile Pic</label>
                <input className="form-control" onChange={handleImageAsFile} type="file" id="formFile" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label"> Address 2 </label>
              <input type="text" ref={address} className="form-control" placeholder="Apartment, studio, or floor" defaultValue={shopDetail.address} />
            </div>
            <div className="col-md-5">
              <label htmlFor="inputCity" className="form-label"> City </label>
              <input type="text" ref={city} className="form-control" placeholder="eg. Delhi" defaultValue={shopDetail.city} />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label"> State </label>
              <input type="text" ref={state} className="form-control" placeholder="eg. Delhi" defaultValue={shopDetail.state} />
            </div>
            <div className="col-md-3">
              <label htmlFor="inputZip" className="form-label"> Zip </label>
              <input type="text" ref={zip} className="form-control" placeholder="eg. xxxxxx" defaultValue={shopDetail.zip} />
            </div>
            <div className="col-12">
              <label htmlFor="inputZip" className="form-label"> Pick your location from map </label>
              <input type="text" ref={mapLocation} className="form-control" placeholder="eg. google map" defaultValue="Map Link" />
            </div>

            <div className="form-group">
              <h6 className="text-uppercase">Social Media Details</h6>
              <div className="col-12 mb-2">
                <label htmlFor="inputZip" className="form-label"> Website </label>
                <input type="url" ref={website} className="form-control" placeholder="eg. https://khadimtailors.com" defaultValue={shopDetail.website} />
              </div>
              <div className="col-12 mb-2">
                <label htmlFor="inputZip" className="form-label"> Facebook </label>
                <input type="url" ref={facebook} className="form-control" placeholder="eg. https://facebook.com/khadimtailors" defaultValue={shopDetail.facebook} />
              </div>
              <div className="col-12 mb-2">
                <label htmlFor="inputZip" className="form-label"> Instagram </label>
                <input type="url" ref={instagram} className="form-control" placeholder="eg. https://instagram.com/khadimtailors" defaultValue={shopDetail.instagram} />
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button type="type" className="btn btn-primary w-100 btn-lg text-uppercase" onClick={(event) => handleShopSave(event)}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default EditShop
