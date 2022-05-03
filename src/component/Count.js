import React, {useState, useEffect, Component} from "react";
// import User from './User'
function Count() {
    const  [Count, setCount] = useState(50);
    const  [Count1, setCount1] = useState(70);
  const [A, setA] = useState({
        delete_component:"divyesh"
    });
   // // componentDidUpdate
    useEffect(()=>{
    console.log("Count 1 call");
    }, [Count1]);
  
    // // componentDidMount
    useEffect(()=>{
        // console.log("aaaaaaaaaaaaaaaaaaaaa");
        fetch('https://reqres.in/api/users?page=2').then((resp)=>{
            resp.json().then((result)=>{
              var data = result.data;
            //   this.setState({users:result.data})
            //   console.log(data);
            })
          })
        });

    return(
        <React.Fragment>
        {/* {A.delete_component && <User />} */}
        <h1> Count {Count} <button onClick={()=>{  setCount(Count + 1); }} > Up  </button> {Count1} <button onClick={()=>{  setCount1(Count1 - 1); }} > Down  </button> </h1>
        <h3> Hello {A.delete_component} <button onClick={()=> setA({delete_component:false})}> Delete </button> </h3>
        <button onClick={()=> setA({delete_component:"Hiren"})}> Change </button>
        </React.Fragment>
    );
}
export default Count;

// import React, { Component } from 'react'

// export default class Count extends Component {
//     constructor(){
//         super();
//         this.state={
//             error:null
//         }
//     }
//     static getDerivedStateFromError(){
//         return {error:true}
//     }
//     render() {
//         return (
//             <div>
//                 {
//                     this.state.error ? <h1> Count page error </h1> : this.props.children
//                 }
//             </div>
//         )
//     }
// }

