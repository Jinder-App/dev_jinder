import { combineReducers } from 'redux';
import candidateReducer from './candidateReducer';


export default combineReducers({
    candidate: candidateReducer,
});
