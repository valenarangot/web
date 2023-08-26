import React from "react";

export function Footer(props){

    const {title} = props
        const footerStyle = {
            color: 'white'
        }

    return(
        <>
            <h4 style={footerStyle}>
                {title}
            </h4>
        </>
    )
}