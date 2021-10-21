import React, { useState } from 'react'
import ButtonHeader from '../../common/ButtonHeader'
import CreateShop from './CreateShop'
import StaticShopsList from './StaticShopsList'

function StaticShops() {

    const [createMode, setCreateMode] = useState(false);
    const createClicked = () => setCreateMode(!createMode)

    return <div className="mainContent-container">
        <ButtonHeader onCreateClick={createClicked} onBackClick={createClicked} showBack={createMode}/>
        { createMode ? <CreateShop /> : <StaticShopsList /> }
    </div>
}

export default StaticShops
