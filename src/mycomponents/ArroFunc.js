import Reac from 'react'


const ArroFunc = ()=>{

    const name=(a)=> {
        alert(a)
    }

    return(
        <div>
            <h1> Zahidul Islam</h1>
            <button onClick={name.bind(this, "Mina")}>Arrow</button>
        </div>
    )
}

export default ArroFunc;