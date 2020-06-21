import React from 'react'
import { useSelector, useDispatch } from  'react-redux'
import { buyBread } from '../redux';

// alternative of redux connect function it has som warnings

function HooksBreadContainer() {
    const numberOfBreads = useSelector(state => state.bread.numberOfBreads)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Breads: { numberOfBreads }</h2>
            <button onClick={()=> dispatch(buyBread())}>Buy Breads</button>
        </div>
    )
}

export default HooksBreadContainer