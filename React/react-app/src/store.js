import {createStore} from 'redux'
import Reducer from './reducer'
let initStore={
    num: 0
};
let store =createStore(Reducer,initStore);

export default store;