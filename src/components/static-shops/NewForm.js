import React, { useState } from 'react'
import { Days } from '../../common/Common';
import FormInfo from './FormInfo';
import FormValidation from './FormValidation';

export default function NewForm() {
    const [days, setDays] = useState(Days);
    const selectedDays = days;
    const { handleChange, values, handleSubmit, errors } = FormInfo(FormValidation, selectedDays);
    
    // Working Days

    const checkHandler = (day, ind) => {
        const thisChildStatus = day.status;
        const daysChildIndexStatus = days[ind].status;
        const allDaysIndex = days.findIndex(item => item.id === 'allDays')
        if(thisChildStatus === daysChildIndexStatus && day.id !== 'allDays') {
            if(selectedDays[ind].status && selectedDays[allDaysIndex].status) {
                selectedDays[ind].status = false
                selectedDays[0].status = false;
            } else if(selectedDays[ind].status && !selectedDays[allDaysIndex].status) {
                selectedDays[ind].status = false
            } else {
                selectedDays[ind].status = true
            }
            setDays(JSON.parse(JSON.stringify(selectedDays)))
            
        } else if(day.id === 'allDays') {            
            for(let i = 0; i < selectedDays.length; i++) selectedDays[i].status = true
            setDays(JSON.parse(JSON.stringify(selectedDays)))
        }
        return selectedDays;
    }
    
    return <div className="formContainer">
        <div className="formSubContainer">
            <h5 className="_heading">New Shop Details</h5>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Shop Name</label>
                    <input type="text" name="shopName" value={values.shopName} onChange={handleChange} className="form-control" placeholder="eg. Khadim Tailors" />
                    {errors.shopName && <p className="errorMessage fz-12 mb-0 mt-1">{errors.shopName}</p>}
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label"> Phone Number </label>
                    <input type="text" name="phone" value={values.phone} onChange={handleChange} className="form-control" placeholder="eg. 7838367864" />
                    {errors.phone && <p className="errorMessage fz-12 mb-0 mt-1">{errors.phone}</p>}
                </div>
                <div className="col-6">
                    <label htmlFor="inputAddress" className="form-label">Email ID</label>
                    <input type="email" name="email" value={values.email} onChange={handleChange} className="form-control" placeholder="example@gmail.com" />
                    {errors.email && <p className="errorMessage fz-12 mb-0 mt-1">{errors.email}</p>}
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputEmail4" className="form-label">Open At</label>
                    <input type="time" name="openAt" value={values.openAt} onChange={handleChange} className="form-control" laceholder="00:00" />
                    {errors.openAt && <p className="errorMessage fz-12 mb-0 mt-1">{errors.openAt}</p>}
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputEmail4" className="form-label">Close At</label>
                    <input type="time" name="closeAt" value={values.closeAt} onChange={handleChange} className="form-control" placeholder="00:00" />
                    {errors.closeAt && <p className="errorMessage fz-12 mb-0 mt-1">{errors.closeAt}</p>}
                </div>
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        {
                            days.map((day, index) => {
                                return <div className="form-check" key={day.id}>
                                    {/* <input className="form-check-input" id={day.id} type="checkbox" onClick={day.id === 'allDays' ? (e) => checkHandlerAllDays(e) : (e)=> checkHandler(e) } /> */}
                                    <input className="form-check-input" id={day.id} checked={day.status} type="checkbox" onClick={(e)=> checkHandler(day, index) } />
                                    <label className="form-check-label" htmlFor={day.id}>{day.day}</label>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="col-2">
                    <div className="profileAvatar">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="col-10">
                    <label htmlFor="formFile" className="form-label">Profile Pic</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="col-12">
                    <label htmlFor="formFile" className="form-label">Profile Pic</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" name="address" value={values.address} onChange={handleChange} className="form-control" placeholder="Apartment, studio, or floor" />
                    {errors.address && <p className="errorMessage fz-12 mb-0 mt-1">{errors.address}</p>}
                </div>
                <div className="col-md-5">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" name="city" value={values.city} onChange={handleChange} className="form-control" placeholder="eg. Delhi" />
                    {errors.city && <p className="errorMessage fz-12 mb-0 mt-1">{errors.city}</p>}

                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <input type="text" name="state" value={values.state} onChange={handleChange} className="form-control" placeholder="eg. Delhi" />
                    {errors.state && <p className="errorMessage fz-12 mb-0 mt-1">{errors.state}</p>}
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" name="zip" value={values.zip} onChange={handleChange} className="form-control" placeholder="eg. xxxxxx" />
                    {errors.zip && <p className="errorMessage fz-12 mb-0 mt-1">{errors.zip}</p>}
                </div>
                <div className="col-12">
                    <label htmlFor="inputZip" className="form-label">Pick your location from map </label>
                    <input type="text" name="map" value={values.map} onChange={handleChange} className="form-control" placeholder="eg. google map" />
                    {errors.map && <p className="errorMessage fz-12 mb-0 mt-1">{errors.map}</p>}
                </div>
                <div className="form-group">
                    <h6 className="text-uppercase">Social Media Details</h6>
                    <div className="col-12 mb-2">
                        <label htmlFor="inputZip" className="form-label">Website</label>
                        <input type="url" name="website" value={values.website} onChange={handleChange} className="form-control" placeholder="eg. https://khadimtailors.com" />
                    </div>
                    <div className="col-12 mb-2">
                        <label htmlFor="inputZip" className="form-label">Facebook</label>
                        <input type="url" name="facebook" value={values.facebook} onChange={handleChange} className="form-control" placeholder="eg. https://facebook.com/khadimtailors" />
                    </div>
                    <div className="col-12 mb-2">
                        <label htmlFor="inputZip" className="form-label">Instagram</label>
                        <input type="url" name="instagram" value={values.instagram} onChange={handleChange} className="form-control" placeholder="eg. https://instagram.com/khadimtailors" />
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary w-100 btn-lg text-uppercase">Save</button>
                </div>
            </form>
        </div>
    </div>
}
