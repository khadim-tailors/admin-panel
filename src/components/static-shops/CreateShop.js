import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { days } from '../../common/utils';
import {Alert} from 'react-bootstrap'
import {storage} from "../../firebase"

function CreateShop() {
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
       
        <div className="formSubContainer">
          <h5 className="_heading">New Shop Details</h5>
          <form class="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" class="form-label">
                Shop Name
              </label>
              <input
                type="text"
                ref={shopName}
                class="form-control"
                placeholder="eg. Khadim Tailors"
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" class="form-label">
                Phone Number
              </label>
              <input
                type="text"
                ref={phone}
                class="form-control"
                placeholder="eg. 7838367864"
              />
            </div>
            <div className="col-6">
              <label for="inputAddress" class="form-label">
                Email ID
              </label>
              <input
                type="email"
                ref={email}
                class="form-control"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="col-md-3">
              <label for="inputEmail4" class="form-label">
                Open At
              </label>
              <input
                type="time"
                ref={openAt}
                class="form-control"
                placeholder="00:00"
              />
            </div>
            <div className="col-md-3">
              <label for="inputEmail4" class="form-label">
                Close At
              </label>
              <input
                type="time"
                ref={closeAt}
                class="form-control"
                placeholder="00:00"
              />
            </div>
            <div className="col-12">
              <div className="d-flex justify-content-between">
                {days.map((day) => {
                  return (
                    <div className="form-check">
                      <input
                        ref={daysOpen}
                        class="form-check-input"
                        id={day.day}
                        type="checkbox"
                      />
                      <label class="form-check-label" for={day.day}>
                        {day.day}{" "}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-12">
              <label for="formFile" class="form-label">
                Profile Pic
              </label>
              <input
                class="form-control"
                onChange={handleImageAsFile}
                type="file"
                id="formFile"
              />
            </div>
            <div className="col-12">
              <label for="inputAddress2" class="form-label">
                Address 2
              </label>
              <input
                type="text"
                ref={address}
                class="form-control"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="col-md-5">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input
                type="text"
                ref={city}
                class="form-control"
                placeholder="eg. Delhi"
              />
            </div>
            <div className="col-md-4">
              <label for="inputState" class="form-label">
                State
              </label>
              <input
                type="text"
                ref={state}
                class="form-control"
                placeholder="eg. Delhi"
              />
            </div>
            <div className="col-md-3">
              <label for="inputZip" class="form-label">
                Zip
              </label>
              <input
                type="text"
                ref={zip}
                class="form-control"
                placeholder="eg. xxxxxx"
              />
            </div>
            <div className="col-12">
              <label for="inputZip" class="form-label">
                Pick your location from map
              </label>
              <input
                type="text"
                ref={mapLocation}
                class="form-control"
                placeholder="eg. google map"
              />
            </div>

            <div className="form-group">
              <h6 className="text-uppercase">Social Media Details</h6>
              <div className="col-12 mb-2">
                <label for="inputZip" class="form-label">
                  Website
                </label>
                <input
                  type="url"
                  ref={website}
                  class="form-control"
                  placeholder="eg. https://khadimtailors.com"
                />
              </div>
              <div className="col-12 mb-2">
                <label for="inputZip" class="form-label">
                  Facebook
                </label>
                <input
                  type="url"
                  ref={facebook}
                  class="form-control"
                  placeholder="eg. https://facebook.com/khadimtailors"
                />
              </div>
              <div className="col-12 mb-2">
                <label for="inputZip" class="form-label">
                  Instagram
                </label>
                <input
                  type="url"
                  ref={instagram}
                  class="form-control"
                  placeholder="eg. https://instagram.com/khadimtailors"
                />
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button
                type="type"
                class="btn btn-primary w-100 btn-lg text-uppercase"
                onClick={(event) => handleShopSave(event)}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default CreateShop