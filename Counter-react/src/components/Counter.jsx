import React from "react";


export function Counter (props){

    const{value} = props

    const counterStyle = {
        color: 'white'
    }

    return(
        <>
        <div className="counterValue">
            <h1 style={counterStyle}>{value}</h1>
        </div>
        </>
        
    )
}