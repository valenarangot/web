import React from "react";

export function Header(props) {

    const {title} = props
    const componentstyleh1 = {
        color: 'orange'
    }

    return(
        <>
         <h1 style={componentstyleh1}>
            {title}
         </h1>
        </>
        
    )
}