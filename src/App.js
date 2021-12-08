import React from 'react'


export default class Toggler extends React.Component{
    
    constructor(){
        super();
        this.state = {
            htext: 'Marco',
            btext: 'Polo'
        };
    }
    change = () => {
        if(this.state.htext === 'Marco'){
        this.setState({
            htext: 'Polo',
            btext: 'Marco'
        })
    }
    else{
        this.setState({
            htext: 'Marco',
            btext: 'Polo'
    })
    }
}
    render(){
        return(<>
        <h1 id="marco-polo">{this.state.htext}</h1>
        <button id="marco-polo-toggler" onClick={this.change}>{this.state.btext}</button>
        </>)
    }
} 

