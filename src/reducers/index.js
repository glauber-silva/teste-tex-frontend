import { combineReducers } from 'redux';
import { carrosReducer } from './carros';

const rootReducer = combineReducers({
    carros: carrosReducer
});

export default rootReducer;