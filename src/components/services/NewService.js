import React, { useEffect, useState } from 'react';
import { imageUpload } from '../../common/Common';
import Loader from '../../common/Loader';
import { v4 as uuidv4 } from 'uuid';
import { designInterface, designLabelInterface, serviceInterface } from '../../interface';
import axios from 'axios';
import { Alert } from '../../common/alerts';
import { useHistory } from 'react-router';

function NewService() {
    const [service, setService] = useState(serviceInterface);
    const [isLoading, setIsloading] = useState(false);
    const [files, setFiles] = useState([]);
    const history = useHistory();

    const addDesign = () => {
        const designData = service.design;
        designData.push(designInterface);
        setService({ ...service, design: designData });
    };

    function getFile(key) {
        return files.find(file => file.key === key);
    }

    const handleLabelChange = (event, index) => {
        const { value } = event.target;
        const designData = JSON.parse(JSON.stringify(service.design));
        designData[index].label = value;
        setService({ ...service, design: designData });

    };

    const handleDesignLabelTitle = (event, designIndex, labelIndex) => {
        const { value } = event.target;
        const designs = service.design;
        const design = JSON.parse(JSON.stringify(designs[designIndex]));
        design.designLabel[labelIndex].title = value;
        designs[designIndex] = design;
        setService({ ...service, design: designs });
    };

    const handleDesignLabelImage = async (event, designIndex, labelIndex) => {
        let file = `${designIndex}_${labelIndex}`;
        setFiles([...files, { key: `${designIndex}_${labelIndex}`, value: event.target.files[0] }]);
        const designs = JSON.parse(JSON.stringify(service.design));
        const design = JSON.parse(JSON.stringify(designs[designIndex]));
        design.designLabel[labelIndex].imageUrl = file;
        designs[designIndex] = design;
        setService({ ...service, design: designs });
    };

    const patchDesignLabelImage = (file, designIndex, labelIndex) => {
        const designs = service.design;
        const design = designs[designIndex];
        design.designLabel[labelIndex].imageUrl = file;
        designs[designIndex] = design;
        setService({ ...service, design: designs });

    };

    const handleServiceNameChange = (event) => {
        const serviceData = JSON.parse(JSON.stringify(service));
        serviceData.serviceName = event.target.value;
        setService(serviceData);
    };

    const handleServicePriceChange = (event) => {
        const serviceData = JSON.parse(JSON.stringify(service));
        serviceData.price = event.target.value;
        setService(serviceData);
    };

    const handleAddLabel = (index) => {
        const serviceData = JSON.parse(JSON.stringify(service));
        serviceData.design[index].designLabel.push(designLabelInterface);
        setService(JSON.parse(JSON.stringify(serviceData)));

    };

    const handleServiceSubmit = async () => {
        setIsloading(true);
        console.log(`service`, service);
        debugger;
        for (let design = 0; design <= service.design.length - 1; design++) {
            for (let label = 0; label <= service.design[design].designLabel.length - 1; label++) {
                const imageUrl = await imageUpload(getFile(service.design[design].designLabel[label].imageUrl).value, "services");
                console.log(imageUrl);
                patchDesignLabelImage(imageUrl, design, label);
            }
        }
        setTimeout(() => {
            console.log("Final service data ", service);
            axios.post("http://localhost:5001/khadim-tailors/us-central1/services/addService", service).then(response => {
                if (response.data.status) {
                    setIsloading(false);
                    history.push("/services");
                    return Alert(response.data.message, "success");
                } else return Alert(response.data.message, "error");
            }).catch(err => {
                return Alert(err.message, "error");
            });
        }, 1000);
    };
    return (
        <>
            <div className="formContainer">
                <div className="formSubContainer servicesFormContainer">
                    <h5 className="d-flex justify-content-between _heading">
                        Add New Service
                        <div className="closePopup">&times;</div>
                    </h5>
                    <form className="" onSubmit="">
                        <div className="row gy-3">
                            <div className="col-7">
                                <div className="form-group">
                                    <label htmlFor="inputEmail4" className="form-label">Service Name</label>
                                    <input type="text" name="shopName" disabled={isLoading} onChange={handleServiceNameChange} className="form-control" placeholder="eg. Khadim Tailors" />
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="form-group">
                                    <label htmlFor="inputEmail4" className="form-label">Service Price</label>
                                    <input type="text" name="shopName" disabled={isLoading} onChange={handleServicePriceChange} className="form-control" placeholder="eg. 500" />
                                </div>
                            </div>
                            <h5 className="mb-0 mt-4 fz-18 font-weight-bold">Add Designs</h5>
                            {
                                service.design.map((design, designIndex) => (
                                    <div className="design-block">
                                        <div className="form-group mb-2">
                                            <label htmlFor="formFile" className="form-label">Label Name</label>
                                            <input type="text" name="shopName" disabled={isLoading} onChange={(event) => handleLabelChange(event, designIndex)} className="form-control" placeholder="eg. Pocket Type" />
                                        </div>
                                        {
                                            design.designLabel.map((label, labelIndex) => (
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <label htmlFor="formFile" className="form-label">Title Name</label>
                                                            <input type="text" name="shopName" disabled={isLoading} onChange={(event) => handleDesignLabelTitle(event, designIndex, labelIndex)} className="form-control" placeholder="eg. Pocket Type" />
                                                        </div>
                                                        <div className="col-8">
                                                            <label htmlFor="formFile" className="form-label">Upload Icon</label>
                                                            <input className="form-control" disabled={isLoading} onChange={(event) => handleDesignLabelImage(event, designIndex, labelIndex)} type="file" id="formFile" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <button className="btn btn-primary mt-3" disabled={isLoading} type="button" onClick={() => handleAddLabel(designIndex)}>Add New <i className="fas fa-plus ml-3 fz-14"></i></button>
                                    </div>
                                ))
                            }

                            <button style={{ margin: '1rem auto' }} type="button" className="btn w-auto margin-auto btn-primary" disabled={isLoading} onClick={addDesign}>{'Add New'} <i className="fas fa-plus ml-3 fz-14"></i></button>
                            <div class="col-12 d-flex justify-content-center mt-4">
                                <button type="button" class="btn btn-primary w-100 btn-lg text-uppercase" disabled={isLoading} onClick={handleServiceSubmit}>{isLoading ? <i class="fas fa-circle-notch fa-spin"></i> : 'Save'}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default NewService;
