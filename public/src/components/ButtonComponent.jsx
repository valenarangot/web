import React from "react";

export function ButtonComponent(props){


const {title, color}= props
    const buttonStyle = {
        backgroundColor: color,
        color: 'white'
    }

return(
    <>
        <button style={buttonStyle} className="ButtonComponent">
            {title}
        </button>
    </>
)
}