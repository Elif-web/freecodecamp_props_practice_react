import React from "react"


export default function Jokes(props){
    return (
        <div className="div">
        <p className = "jokes">
        Setup => {props.Setup} <br/>Punchline => {props.Punchline}
        </p>
        </div>
    )
}