import React from "react";

class LifeCycle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            favoritecolor: 'red',
            counter: 0
        };
    }

    // static getDerivedStateFromProps(props, state){
    //     return {
    //         favoritecolor: props.favcol
    //     }
    // }

    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState({
    //             favoritecolor: 'yellow',
    //             counter: + 1
    //         })
    //     }, 1000)
    // }




    // Updating
    // // static getDerivedStateFromProps(props, state){
    // //     return {favoritecolor: props.favcol};
    // // }
    // shouldComponentUpdate(){
    //     return false;
    // }

    // componentDidMount(){
    //     setTimeout(() =>{
    //         this.setState({favoritecolor: 'blue'})
    //     }, 3000)
    // }
    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     document.getElementById('div1').innerHTML = 
    //     'Before the update the favorite color was ' + prevState.favoritecolor;
    // }
    // componentDidUpdate(){
    //     document.getElementById('div2').innerHTML = 
    //     'The favorite color after update is ' + this.state.favoritecolor;
    // }


    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({favoritecolor: 'blue'})
    //     }, 3000)
    // }
    // componentDidUpdate(){
    //     document.getElementById('mydiv').innerHTML = 
    //     'After update ' + this.state.favoritecolor;
    // }

    // changeColor = () => {
    //     this.setState({favoritecolor: 'blue'})
    // }


        render () {
        return (<>
        <h2>My favorite color is {this.state.favoritecolor}.</h2>
        {/* <button onClick={this.changeColor}>change color</button>
        <h2>{this.state.counter}</h2> */}
        {/* <div id="div1"></div> */}
        {/* <div id="div2"></div> */}
        <div id="mydiv"></div>
        </>)
    }
}

// Unmounting

export default class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: true
        };
    }

    delHeader = () => {
        this.setState({show: false});
    }
    header = () => {
        this.setState({show: true});
    }
    render() {
        let myheader;
        if(this.state.show) {
            myheader = <Child />;
        }
        else{
            myheader =<LifeCycle />;
        }
        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}>Delete Header</button>
                <button type="button" onClick={this.header}>True</button>
            </div>
        );
    }
}

class Child  extends React.Component{
    componentWillUnmount() {
        alert("The component named Header is going to be unmounted.")
    }
    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}