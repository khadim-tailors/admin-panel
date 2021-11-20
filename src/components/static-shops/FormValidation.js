const FormValidation = (values) => {
    let errors = {};

    // Shop Name
    if(!values.shopName.trim('')) errors.shopName = "Shop Name Required";

    // Phone
    if(!values.phone) errors.phone = "Phone Number Required";

    // Email
    if(!values.email) errors.email = "Email ID Required";
    else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = "Email address is invalid";

    // Open close times
    if(!values.openAt) errors.openAt = "Open Time Required";
    if(!values.closeAt) errors.closeAt = "Close Time Required";

    // Address
    if(!values.address) errors.address = "Address Required";
    else if(values.length < 3) errors.address = "Address can't be less than 3 letters";

    // City, State, Zip
    if(!values.city) errors.city = "City Required";
    if(!values.state) errors.state = "State Required";
    if(!values.zip) errors.zip = "Zip Code Required";

    if(!values.map) errors.map = "Map Link Required";
    
    return errors;

}
export default FormValidation;
