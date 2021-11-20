import React from 'react'
import ButtonHeader from '../../common/ButtonHeader'
import { useHistory } from "react-router-dom";
import StaticShopsList from './StaticShopsList'

function StaticShops() {
    const history = useHistory()
    const createClicked = () => history.push('/shops/create-shop');

    return (
    <div className="mainContent-container">
        <ButtonHeader handleCreateMode={createClicked}/>
        <StaticShopsList />
    </div>
    )
}

export default StaticShops
