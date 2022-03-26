import React from 'react'
import './Display.css'

const Display = (props) => {
    return (
        <div className='display'>
            {props.valueOne}
            {props.opDisplay}
            {props.current === 1 ? props.valueTwo : ''}
            <span></span>
        </div>
    )
}

export default Display
