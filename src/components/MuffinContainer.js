import React from 'react'
import { buyMuffin } from '../redux';
import { connect } from 'react-redux'

function MuffinContainer(props) {
    return(
        <div>
            <h2>Number of Muffins : {props.numberOfMuffins}</h2>
            <button onClick={props.buyMuffin}>Buy Muffins</button>
        </div>
    )
}


//slectors can be used to maps this for large project 

const mapStateToProps = state => {
    return {
        numberOfMuffins : state.muffin.numberOfMuffins
    }
}

//
const mapDispatchToProps = dispatch => {
    return {
        buyMuffin : () => dispatch(buyMuffin())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MuffinContainer)