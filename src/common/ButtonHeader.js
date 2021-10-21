import React from 'react'

function ButtonHeader({onCreateClick, onBackClick, showBack}) {
    return <div className="buttonContainer mb-4 d-flex justify-content-between">
        {
            showBack 
            ? <button className="btn btn-outline-dark" onClick={onBackClick}><i className="fas fa-chevron-left mr-3"></i> Back</button>
            : ''
        }
        {
            showBack ? '' : 
            <button className="btn btn-primary" onClick={onCreateClick}>Add New <i className="fas fa-plus ml-3"></i></button>
        }
    </div>
}

export default ButtonHeader
