import React from 'react'

function Alert(props) {
    return (
        props.message && <div>
            <div className={`alert alert-${props.message.type} alert-dismissible fade show`} role="alert">
                <strong>{props.message.type} </strong>: {props.message.msg}
            </div>
        </div>
    )
}

export default Alert