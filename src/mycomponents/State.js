import React from 'react'

class State extends React.Component{

    constructor (){
        super()
        this.state = {
            name:"Zahidu",
            age:23
        }
    }

    render(){
        return(
            <div>
            <h2>{this.state.name}</h2>
            <h2>{this.state.age}</h2>
            </div>
            

        )
    }

}

export default State;