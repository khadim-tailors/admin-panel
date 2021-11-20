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
        image:null,
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

    const handleFileChange = e =>{
        const {target} = e;
        setValues({ ...values, [target.name]:target.files[0]})
    }

    const handleSubmit = () => {
        const validationUpdate = FormValidation(values);
        setErrors(validationUpdate);
        const workingDays = selectedDays.some(day => day.status === true)
        console.log(workingDays.length);
        
        if(Object.keys(validationUpdate).length !== 0) return Alert('Please, Fill valid details', 'error');
        if(!workingDays) return Alert('Please, Select Working Days', 'error');
        return values
    }

    

    return {handleChange, values, handleSubmit, errors, handleFileChange}
}

export default FormInfo;
