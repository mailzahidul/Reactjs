import React from 'react'


function Alertme(a){
    alert(a)
}

function Func2nd(){
    return(
        <div>
        <h2>This is from 2nd function </h2>
        <button onClick={Alertme.bind(this,"Alert Me")}>Alert Me</button>
        </div>
        
    );
}

export default Func2nd;