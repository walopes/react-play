import React from "react";

function Joke(props){
    console.log({props})
    return (
        <div>
            <p className="question">{props.props.question}</p>
            <p className="punchLine" >{props.props.punchLine}</p>
        </div>
    )
}

export default Joke;
