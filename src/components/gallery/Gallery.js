import React, { useState } from 'react'
import ButtonHeader from '../../common/ButtonHeader'
import CreateNew from './CreateNew';
import GalleryDetail from './GalleryDetail';
import GalleryList from './GalleryList';

function Gallery() {
    const [createMode, setCreateMode] = useState(false);
    const createClicked = () => setCreateMode(!createMode)
    return <div className="mainContent-container">
        <ButtonHeader onCreateClick={createClicked} onBackClick={createClicked} showBack={createMode}/>
        { createMode ? <GalleryDetail /> : <GalleryList /> }
        <br /><br />
        <CreateNew />
    </div>
}

export default Gallery
