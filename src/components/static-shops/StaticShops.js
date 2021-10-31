import React, { useState } from 'react'
import ButtonHeader from '../../common/ButtonHeader'
import CreateShop from './CreateShop'
import NewForm from './NewForm';
import StaticShopsList from './StaticShopsList'

function StaticShops() {

    const [createMode, setCreateMode] = useState(false);
    const createClicked = () => setCreateMode(!createMode);

    return <div className="mainContent-container">
        <ButtonHeader onCreateClick={createClicked} onBackClick={createClicked} showBack={createMode}/>
        { createMode ? <CreateShop /> : <StaticShopsList /> }

        <br /><br /><br />

        <NewForm />
        
    </div>
}

export default StaticShops
