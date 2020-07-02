import React from 'react';

function Result(props) {

    return (
        <h3 className={props.class}>{props.score}</h3>
    )
};

export default Result