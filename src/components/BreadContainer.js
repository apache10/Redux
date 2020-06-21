import React, { useState } from 'react'
import { buyBread } from '../redux';
import { connect } from 'react-redux'

function BreadContainer(props) {
    const [number, setNumber] = useState(1);
    return(
        <div>
            <h2>Number of Breads : {props.numberOfBreads}</h2>
            <input type='text' value={number} onChange={ e => setNumber(e.target.value)} />
            <button onClick={() => props.buyBread(number)}>Buy {number}  Breads</button>
        </div>
    )
}


//slectors can be used to maps this for large project 

const mapStateToProps = state => {
    return {
        numberOfBreads : state.bread.numberOfBreads
    }
}

//
const mapDispatchToProps = dispatch => {
    return {
        buyBread : (number) => dispatch(buyBread(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BreadContainer)