import { combineReducers } from 'redux';
import swapperReducer from './swapper/swapper.reducer';
import routerHub from "./router/router.reducer"
const rootReducer = combineReducers({
    swapper: swapperReducer,
    routes: routerHub
});
export default rootReducer;