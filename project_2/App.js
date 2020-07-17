import React from "react";
import Joke from "./Joke";

// App should render 5 <Joke /> components
  // Each Joke should receive a "question" prop and a "punchLine" prop
  // and render those however you'd like

function App(){
    return (
        <div>
            <Joke props={{question: "Are you a programmer?", punchLine: "I am blastoise"}}/>
            <Joke props={{question: "Are you OK?", punchLine: "I am blastoise"}}/>
            <Joke props={{question: "What is the answer for everything?", punchLine: "Your mother's ass"}}/>
            <Joke props={{question: "No punchline?", punchLine: null}}/>
        </div>
    )
};

export default App;
