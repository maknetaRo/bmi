import React from 'react';

function BmiDescription(props) {
    return (
        <p className={props.class}>
            {props.text}
        </p>
    )
}

export default BmiDescription