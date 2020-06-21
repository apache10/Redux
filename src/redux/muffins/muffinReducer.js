import { BUY_MUFFIN } from './muffinTypes'


const muffinInitialState = {
    numberOfMuffins: 15
}

const muffinReducer = (state = muffinInitialState, action) => {
    switch(action.type){
        case BUY_MUFFIN: return {
            ...state,
            numberOfMuffins: state.numberOfMuffins - 1
        }

        default: return state
    }
}

export default muffinReducer