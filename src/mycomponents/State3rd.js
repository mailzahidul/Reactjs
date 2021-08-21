import { render } from '@testing-library/react';
import React from 'react';




class State3rd extends React.Component{

// Alert functin for onClick
    click(a){
        alert(a)
    }



// State create for data storage...
    constructor(){
        super()
        this.state={
            name:'Zahidul',
            roll:'23',
            identity :{
                mina:'me',
                raju:'she'
            }
        }
    }

    render(){
        return(
            <div>
                <h1>3rd State Function {this.props.name}</h1>
                <h1>3rd State Function {this.props.name}</h1>
                <h1>3rd State Function {this.state.name}</h1>
                <h1>3rd State Function {this.state.identity.mina}</h1>
                <button onClick={this.click.bind(this,"This is")}>3rd state</button>
            </div>
            
        )
    }
}

export default State3rd;