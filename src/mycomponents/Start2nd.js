import React from 'react'

class Start2nd extends React.Component{

    constructor(){
        super()
        this.state ={
            'postal_code':"1230",
            house:"34"
        }
    }

    render(){
        return (
            <div>
                <h1>Zahidul Islam from 2nd state {this.state.postal_code} </h1>
                <h1>Zahidul Islam from 2nd state {this.state.house} </h1>
            </div>
            
        )
    }
}

export default Start2nd;