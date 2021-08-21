import React, {Component} from 'react'




class ClassCom extends Component{

    doclick(a){
        alert(a)
    }


    render(){
        return (
            <div>
                <h1>{this.props.country}Class Component</h1>
                <button onClick={this.doclick.bind(this,"Mina")}>Class Button</button>                
            </div>
        )
    }
}

export default ClassCom;