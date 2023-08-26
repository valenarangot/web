import React from "react";

export function ButtonComponent(props){


const {title, borderColor, onClick}= props

    const buttonStyle = {
        borderColor: borderColor,
        color: 'white'
    };




return(
    <>
        <button style={buttonStyle} className="ButtonComponent"
        onClick={onClick}>
        {title}
        </button>
    </>
)
}