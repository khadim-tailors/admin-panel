import {actionTypes} from '../actionTypes/actionTypes';

const setAllShops = (shops) =>({
    type:actionTypes.SET_ALL_SHOPS,
    payload:shops
})

export default setAllShops;

