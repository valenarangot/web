import React from "react";

export function ButtonFirst({title, onClick}){

    return (
        <>
            <button
            className="ButtonFirst"
            onClick={onclick}>
            {title}
            </button>
        </>
    )
}