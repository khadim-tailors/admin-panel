import React, { useState } from 'react'
import { Alert } from '../../common/alerts';

const FormInfo = (FormValidation, selectedDays) => {
    const [values, setValues] = useState({
        shopName: '',
        phone: '',
        email: '',
        openAt: '',
        closeAt: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        map: '',
        website: '',
        facebook: '',
        instagram: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const validationUpdate = FormValidation(values);
        setErrors(validationUpdate);
        const workingDays = selectedDays.some(day => day.status === true)
        console.log(workingDays.length);
        
        if(Object.keys(validationUpdate).length !== 0) return Alert('Please, Fill valid details', 'error');
        if(!workingDays) return Alert('Please, Select Working Days', 'error');
        const formData = {
            shopName: values.shopName,
            phone: values.phone,
            email: values.email,
            openAt: values.openAt,
            closeAt: values.closeAt,
            address: values.address,
            city: values.city,
            state: values.state,
            zip: values.zip,
            map: values.map,
            website: values.website,
            facebook: values.facebook,
            instagram: values.instagram,
        }

        console.table(formData);
        setValues({ 
            shopName: '', 
            phone: '', 
            email: '', 
            openAt: '', 
            closeAt: '', 
            address: '', 
            city: '', 
            state: '', 
            zip: '', 
            map: '', 
            website: '', 
            facebook: '', 
            instagram: '',
        });
    }

    

    return {handleChange, values, handleSubmit, errors}
}

export default FormInfo;
