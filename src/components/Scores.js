import React from 'react';

const Scores = (props) => {
    return(
        <div className="container">
        <h4>{props.msg}</h4>
        <h4>Current: {props.current}</h4>
        <h4>High Score: {props.high}</h4>
        </div>
    )
}

export default Scores;