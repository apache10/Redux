import {BUY_BREAD } from './breadTypes'


const breadInitialState = {
    numberOfBreads: 20
}

const breadReducer = (state = breadInitialState, action) => {
    switch(action.type){
        case BUY_BREAD: return {
            ...state,
            numberOfBreads: state.numberOfBreads - action.payload
        }

        default: return state
    }
}

export default breadReducer