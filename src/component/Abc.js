// import React,{Component} from 'react';

// class Abc extends Component{
//     render(){
//         console.log("aaaaaaaaaaaaaaaaaaaa");
//         return(
//             <>
//             <h1> hello {this.props.name} </h1>
//             <h2> Welcome to </h2>
//             </>
//         );
//     }
// }


// import React from 'react';
// import React, { Component } from 'react';
// import User from './component/User';

// class Abc extends Component{
//     render(){
//         return(
//             <>
//             <h1> hello {this.props.name} </h1>
//             <h2> Welcome to </h2>
//             </>
//         );
//     }
// }
// export default Abc;
// class Abc extends Component{
//     constructor(props){
//         super(props);
//             this.state={
//                 name: "hiren",
//                 roll: this.props.roll
//             };
//         }
    
//     render(){
//         return(
//         <div>
//             <h1> hello {this.state.name}</h1>
//             <h1> roll {this.state.roll}</h1>
//         </div>
//         );
//     }
// }

// function Abc(props){
//     return(
//         <h1> hi {props.roll} </h1>
//     );
// }

// class Abc extends Component{
//     render(){
//         return(
//         <h1> jay roll_no. {this.props.roll} </h1>
//         );
//     }
// }

// // life cycle
import React,{Component, useEffect} from 'react';
import User from './User';
export default class Abc extends Component{
    //  1
    constructor(){
        super();
        this.state={name:"divyesh", delete_component:"cscx"};
        // this.setState={name:abc}
        console.log("constructor");
    }

    //  2, 5
    static getDerivedStateFromProps(props,state){
        console.log("getDrivedStateFromProps");
        return{};
    }

    //  6
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }

    //  4
    componentDidMount(){
        this.setState({name:"hiren"});
        console.log("componentDidMount");
    }
    
    //  9
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    
    //  8
    getSnapshotBeforeUpdate(p_props,p_state){
        console.log("getSnapshotBeforeUpdate", p_state.name);
        return{};
    }

    //  3,  7
    render(){
        return(
            // console.log("render");
            <p> Hello {this.state.name} 
            <div></div>
                {this.state.delete_component && <User />}
                <button onClick={()=> {this.setState({delete_component:false})}}> Delete </button>
                <button onClick={()=> {this.setState({name:"divyesh"})}}> Change </button>
            </p>
        );
    }
}

// // events 
// class Abc extends Component{

//     mclick = () => {
//         // console.log("button click", this);
//         document.getElementById("h1").style.color = "yellow";
//     }
//     xclick = () => {
//         // console.log("button click", this);
//         document.getElementById("h1").style.color = "green";
//     }
//     aclick = () => {
//         // console.log("button click", this);
//         document.getElementById("h1").style.color = "red";
//     }
//     render(){
//         return(
//             <div>
//                 <h1 id="h1" onMouseDown ={this.mclick} onMouseOver ={this.aclick} onMouseOut={this.xclick}> Hello {this.props.roll}</h1>
//                 <button onDoubleClick={this.click}> click me ! </button>
//             </div>
//         );
//     }
// }

// export default class Abc extends Component {
//     render() {
//            const arr = this.props.array;
          
//          var new_arr = arr.map(value=>{
//             return <ul key={value.id}> {value.name} </ul>
//           })
//         return (
//             <>
//            <ul>
//                {new_arr}
//            </ul>
//             </>
//         );
//     }
// }


// class Abc extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
//     handleSubmit(event) {
//       alert('An essay was submitted: ' + this.state.value);
//     }
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Essay:
//             <textarea  onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }
//     export default Abc;

// // Lifting State Up

// import React, { Component } from 'react'

// export default class Abc extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.app_name}
//       </div>
//     )
//   }
// }

// // Composition

// import React from 'react'

// var Abc = (a)=>{
//   return <h1> Hello {a.name} </h1>
// }
// export default Abc;