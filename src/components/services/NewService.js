import React, { useState } from 'react'
import { imageUpload } from '../../common/Common';
import Loader from '../../common/Loader';
import { designInterface, designLabelInterface, serviceInterface } from '../../interface'

function NewService() {
    const [service, setService] = useState(serviceInterface);
    const [isLoading, setIsloading] = useState(false)
    const addDesign = () =>{
        const designData =  service.design;
        designData.push(designInterface)
        setService({...service, design:designData})
    }

    const handleLabelChange =(event, index)=>{
        const {value} = event.target;
        const designData = JSON.parse(JSON.stringify(service.design));
        designData[index].label = value;
        setService({...service, design:designData})

    }

    const handleDesignLabelTitle = (event, designIndex, labelIndex)=> {
        const { value } = event.target;
        const designs = service.design
        const design = JSON.parse(JSON.stringify(designs[designIndex]))
        design.designLabel[labelIndex].title = value;
        designs[designIndex] = design;
       setService({...service, design:designs})
    }

    const handleDesignLabelImage = (event, designIndex, labelIndex)=> {
        let file = event.target.files[0];
        console.log(labelIndex)
        const designs = JSON.parse(JSON.stringify(service.design))
        const design = JSON.parse(JSON.stringify(designs[designIndex]))
        console.log(design.designLabel)
        design.designLabel[labelIndex].imageUrl = file;
        console.log(design.designLabel[labelIndex].imageUrl)
        designs[designIndex] = design;
       setService({...service, design:designs})
    }

    const patchDesignLabelImage = (file, designIndex, labelIndex)=> {
        const designs = JSON.parse(JSON.stringify(service.design))
        const design = JSON.parse(JSON.stringify(designs[designIndex]))
        console.log(design)
        design.designLabel[labelIndex].imageUrl = file;
        designs[designIndex] = design;
       setService({...service, design:designs})

    }

    const handleServiceNameChange = (event) =>{
        const serviceData =  JSON.parse(JSON.stringify(service))
        serviceData.serviceName = event.target.value;
        setService(serviceData)
    }

    const handleServicePriceChange = (event) =>{
        const serviceData =  JSON.parse(JSON.stringify(service))
        serviceData.price = event.target.value;
        setService(serviceData)
    }

    const handleAddLabel = (index) =>{
        const serviceData = JSON.parse(JSON.stringify(service))
        serviceData.design[index].designLabel.push(designLabelInterface);
        setService(JSON.parse(JSON.stringify(serviceData)))

    }

    const handleServiceSubmit = async ()=>{
        console.log(service)
        return
        setIsloading(true);
        let designIndex = 0;
        let designLabelIndex = 0;
        for(const design of service.design) {
            for(const label of design.designLabel) {
                console.log(label.imageUrl)
                const imageUrl = await imageUpload(label.imageUrl, "services");
                console.log(imageUrl)
                patchDesignLabelImage(imageUrl, designIndex, designLabelIndex);
                designLabelIndex++;
            }
            designIndex++;
        }
        console.log(service)

    }
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
                            service.design.map((design, designIndex)=> (
                                <div className="design-block">
                                    <div className="form-group mb-2">
                                        <label htmlFor="formFile" className="form-label">Label Name</label>
                                        <input type="text" name="shopName" disabled={isLoading} onChange={(event)=>handleLabelChange(event,designIndex)} className="form-control" placeholder="eg. Pocket Type" />
                                    </div>
                                    {
                                        design.designLabel.map((label, labelIndex)=> (
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <label htmlFor="formFile" className="form-label">Title Name</label>
                                                        <input type="text" name="shopName" disabled={isLoading} onChange={(event)=>handleDesignLabelTitle(event,designIndex, labelIndex)} className="form-control" placeholder="eg. Pocket Type" />
                                                    </div>
                                                    <div className="col-8">
                                                        <label htmlFor="formFile" className="form-label">Upload Icon</label>
                                                        <input className="form-control" disabled={isLoading} onChange={(event)=>handleDesignLabelImage(event, designIndex, labelIndex)} type="file" id="formFile" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <button className="btn btn-primary mt-3" disabled={isLoading} type="button" onClick={()=>handleAddLabel(designIndex)}>Add New <i className="fas fa-plus ml-3 fz-14"></i></button>
                                </div>
                            ))
                        }
                    
                    <button style={{margin: '1rem auto'}} type="button" className="btn w-auto margin-auto btn-primary" disabled={isLoading} onClick={addDesign}>{'Add New'} <i className="fas fa-plus ml-3 fz-14"></i></button>
                    <div class="col-12 d-flex justify-content-center mt-4">
                        <button type="button" class="btn btn-primary w-100 btn-lg text-uppercase" disabled={isLoading} onClick={handleServiceSubmit}>{isLoading ? <i class="fas fa-circle-notch fa-spin"></i> : 'Save'}</button>
                    </div>
                </div>
            </form>
        </div>            
    </div> 
    </>
    )
}

export default NewService
