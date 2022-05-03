

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddUser from './component/AddUser';
import Edit from './component/Edit';
import Home from './component/Home';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">  </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/Adduser" component={AddUser}>
          </Route>
          <Route exact path="/Edituser/:id" component={Edit}>
          </Route>
          <Route exact path="/" component={Home}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



// import React, { Component } from 'react';
// import Context from './context/Context';
// // import Guest from './component/Guest';

// export default class App extends Component {
//   render() {
//     // const prime = this.props.prime;
//     return (
//       // // <React.Fragment>
//       //     <h1> Welcome Guest </h1>
//       //     {prime && <Guest/>}
//       // </React.Fragment>
//       <>
//         <Context />
//       </>
//     )
//   }
// }

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Abc from './component/Abc';

// // // ReactDOM.render(<App prime={false} />, document.getElementById("root"));
// var array = [10,20,30,40,50,60];
// ReactDOM.render(<Abc numberb ={array}/>, document.getElementById("root"));
// export default App;

// // Lifting State Up
// import React, { Component } from 'react'
// import Abc from './component/Abc'

// export default class App extends Component {
//   state={
//     name : 'rahul'
//   };
//   render() {
//     return <Abc app_name={this.state.name} />;
//   }
// }

// //  Composition
// var App = () =>{
//   return(
//     <div>
//       <Abc name="Rahul"/>
//       <Abc name="Jay"/>
//       <Abc name="Hiren"/>
//       <Abc />
//     </div>
//   )
// }
// export default App;

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       users : null
//     }
//   }  
//   componentDidMount(){
//     fetch('https://reqres.in/api/users?page=2').then((resp)=>{
//       resp.json().then((result)=>{
//         // var data = result.data;
//         this.setState({users:result.data})
//         // console.log(data);
//       })
//     })
//   }
//   render() {

//     return (
//       <div>

//       <table border="5px" width="100%" color="red">
//             <tr border-style= "solid" > 
//               <td> <b> Id </b></td>
//               <td> <b> Name </b></td>
//               <td> <b> Email </b> </td> 
//               <td> <b> Avatar </b> </td> 
//             </tr>
//         {
//          this.state.users ?
//          this.state.users.map((val)=> 
//          <tr key={val.id} border-style= "solid" >
//               <td>{val.id}</td>
//               <td>{val.first_name} {val.last_name}</td>
//               <td> <a href={val.email}> {val.email} </a> </td>
//               <td> <a href={val.avatar}> {val.avatar} </a> </td>
//         </tr> 
//          )
//          :
//          null
//         }
//         </table>
//       </div>
//     )
//   }
// }
// function* fetchList(action) {
//   yield call(
//     request({
//       type: CommonConstants.FETCH_LIST,
//       method: "POST",
//       url: `https://reqres.in/api/users?page=2`,
//       data: action.data,
//     }),
//     action
//   );
// }
// yield takeLatest(CommonConstants.FETCH_LIST, fetchList);