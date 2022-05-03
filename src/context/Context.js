import React, { Component } from 'react';
import Child1 from './Child1';

export const context = React.createContext();

class Context extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: 'divyesh',
                lname: 'limbasiya'
            }
        }
    }
    render() {
        return (
            <>
                <h1>Parent</h1>
                <context.Provider value={this.state.user} >
                    <Child1 />
                </context.Provider>
            </>
        )
    }
}
export default Context;