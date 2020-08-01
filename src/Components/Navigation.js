import React from 'react';

const navigation = (props) => {    
    return (
        <nav className="btnz">
            <button className="prevBtn" onClick={props.previous}> Previous </button>
            <button className="nextBtn" onClick={props.next}> Next </button>
        </nav>
    )
}


export default navigation