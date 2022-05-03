import React from 'react';
class User extends React.Component{
    //  10
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render(){
        return(
        <div>
            
        </div>
        );
    }
}

// export default User;

// import React, { Component } from 'react';

// export default class User extends Component {
//     render() {
//         return (
//             <div>
//                 <h1> Welcome Rahul </h1>
//                 <button> Logout </button>
//             </div>
//         )
//     }
// }

// import React, { Component } from 'react'

//  class User extends Component {

//     render() {
//         if(true){
//             throw new Error('dfsfsd error');
//         }
//         return(<></>)
//     }
// }
// export default User;


import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}
