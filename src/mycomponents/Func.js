import React from 'react'


function Func(props){

function doThis(a){
    alert(a)
}

    return(
        <div>
            <h1> Hi, {props.name} You are welcome to at the age of {props.age}</h1>
            <button onClick={doThis.bind(this,"Button is clicked...")}>Click me</button>            
        </div>

    )
}

export default Func;