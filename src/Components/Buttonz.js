import React from "react";

const Buttonz = (props) => {
    return(
        <div>
        <nav>
            <button onClick={props.previous}> Previous </button>
            <button onClick={props.next}> Next </button>
        </nav>
        <div className="houseInfoNav">
            {<button onClick={props.sold}> SOLD </button>}
            <button> Delete Item </button>            
        </div>
        <button className="addItem"> Add Item </button>
    </div>
    )
    console.log(props.sold)
}


export default Buttonz