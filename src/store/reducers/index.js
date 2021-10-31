import { combineReducers } from "redux";
import {setAllShops} from './shop.reducer'

const reducers = combineReducers({allShops:setAllShops});

export default reducers;