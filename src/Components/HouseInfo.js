import React from 'react';
import ProductInteraction from './ProductInteraction';

const HouseInfo = (props) => {    
    // console.log(props.itemsForSale[0])
    // console.log(props.index)
    return <section className="rightSide">
        <section className="ItemInfoBox">
            <h3 className="Item-status"><u>Status:</u>{" "}{props.itemsForSale[props.index].status ? "Sold!!!": "Available"}</h3>
            <h3 className="Item-Name"><u>Item:</u>{" "}{props.itemsForSale[props.index].name}</h3>
            <h3 className="Item-Year"><u>Year Crafted:</u>{" "}{props.itemsForSale[props.index].year}</h3>
            <h3 className="Item-Description"><u>Description:</u>{" "}{props.itemsForSale[props.index].description}</h3>
        </section>
    </section>
}


export default HouseInfo