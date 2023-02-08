import React from 'react'

const Helmet = (props) => {
    document.title = props.title + ' - SSSTUTTER'
    return (
        <>
            {props.children}
        </>
    )
}

export default Helmet
