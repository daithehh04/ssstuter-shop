import React, { memo, useRef } from 'react'

const CheckBox = (props) => {
    const inputRef = useRef(null)

    const onChange = () => {
        if (props.onChange) {
            props.onChange(inputRef.current)
        }
    }
    return (
        <label className='custom-checkbox'>
            <input type="checkbox" ref={inputRef} onChange={onChange} checked={props.checked} />
            <span className='custom-checkbox__checkmark'>
                <i class="ri-check-line"></i>
            </span>
            {props.label}
        </label>
    )
}

export default memo(CheckBox)