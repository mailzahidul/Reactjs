import React from 'react'


class IfStateClass extends React.Component{

    constructor(){
        super()
        this.state={
            login:true
        }
    }

    render(){
    //    if(this.state.login == true)
    //    {
    //        return(<h1>If True</h1>)                      // if - else condition always implement outsite return.
    //    }
    //    else{
    //         return(<h1>If False</h1>)
    //    }

       return(
           this.state.login? 
            (
                <h2>First block</h2>                            // In return we can use element variable
            ):
            (
                <h2>Second block</h2>
            )

       ) 

    }
}

export default IfStateClass;