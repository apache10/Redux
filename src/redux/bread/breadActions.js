import { BUY_BREAD } from './breadTypes' 


export const buyBread = (number = 1) => {
    return {
        type: BUY_BREAD,
        payload: number
    }
}