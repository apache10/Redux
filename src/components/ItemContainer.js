import React from 'react'
import {connect} from 'react-redux'
import { buyBread, buyMuffin } from '../redux';

function ItemContainer(props) {
    return (
        <div>
        <h2>Item {props.itemName} : {props.item}</h2>
        <button onClick={props.buyItem}>Buy {props.itemName}</button>
        </div>
    )
}



const mapStateToProps = (state, ownProps)=> {
    const itemState = ownProps.bread? state.bread.numberOfBreads : state.muffin.numberOfMuffins
    return {
        item : itemState,
        itemName : ownProps.bread? "Bread" : "Muffin"
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.bread
    ? ()=> dispatch(buyBread())
    : ()=> dispatch(buyMuffin())
    return {
        buyItem : dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
