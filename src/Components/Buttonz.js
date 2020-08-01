import React from "react";

const Buttonz = (props) => {
    return(                
        <div className="houseInfoNav">
            {<button onClick={props.putItemsForSale}> SOLD </button>}
            <button onClick={props.deleteItemForSale}> Delete Item </button>            
        </div>      
    )
}


export default Buttonz