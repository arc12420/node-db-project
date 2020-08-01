import React from 'react';

const HouseInfo = (props) => {
    return <section className="rightSide">
        <section className="ItemInfoBox">
            <h3 className="Item-status"><u>Status:</u>{" "}{props.itemsForSale[props.index]&& <span>{props.itemsForSale[props.index].status ? "Sold!!!": "Available"}</span>}</h3>
            <h3 className="Item-Name"><u>Item:</u>{" "}{ props.itemsForSale[props.index]&& props.itemsForSale[props.index].name}</h3>
            <h3 className="Item-Year"><u>Year Crafted:</u>{" "}{ props.itemsForSale[props.index]&& props.itemsForSale[props.index].year}</h3>
            <h3 className="Item-Description"><u>Description:</u>{" "}{ props.itemsForSale[props.index]&& props.itemsForSale[props.index].description}</h3>
        </section>
    </section>
}


export default HouseInfo