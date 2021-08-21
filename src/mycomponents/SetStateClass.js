import React from 'react'


class SetStateClass extends React.Component{

    // Define a state
    constructor(){
        super()
        this.state={
            title:'iPhone X',
            model:'34xj',
            price:3434
        }
    }

// function by onClick method using setState.
ChangeData=()=>{
    return(
        this.setState({
            title:'Sumsung',
            model:'222y'
    })
    )
}


    render(){
        return(
            <div>
                <p>Product Title: {this.state.title}</p>
                <p>Product Title: {this.state.model}</p>
                <p>Product Title: {this.state.price}</p>
                <button onClick={this.ChangeData}>Change Data</button>
            </div>
        )
    }
}

export default SetStateClass;