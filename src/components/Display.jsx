import React from 'react'
import './Display.css'

const Display = (props) => {
    return (
        <div className='display'>
            {props.value}
            <span></span>
        </div>
    )
}

export default Display
