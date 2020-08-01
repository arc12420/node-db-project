import React from 'react';

const navigation = (props) => {    
    return (
        <nav>
            <button onClick={props.previous}> Previous </button>
            <button onClick={props.next}> Next </button>
        </nav>
    )
}


export default navigation