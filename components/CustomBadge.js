import { FaReact } from 'react-icons/fa';
import React from 'react'

export const CustomBadge = ({name}) => {
    return (
        <>
            <span 
                className="badge badge-dark mr-1 p-1"
            >
               {
                   name === 'React JS' && <FaReact/> 
               } {name}
            </span>
        </>
    )
}
