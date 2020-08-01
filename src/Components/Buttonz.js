import React from "react";

const Buttonz = (props) => {
    return(                
        <div className="houseInfoNav">
            {<button className="soldButton" onClick={props.putItemsForSale}> SOLD </button>}
            <button className="deleteButton" onClick={props.deleteItemForSale}> Delete Item </button>            
        </div>      
    )
}


export default Buttonz