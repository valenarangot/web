import React from 'react';

export function ButtonSecond({title, onClick}){

    return (
        <>
            <button
            className="ButtonSecond"
            onClick={onclick}>
            {title}
            </button>
        </>
    )
}