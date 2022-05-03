import React, { Component } from 'react';
import Child2 from './Child2';

export default class Child1 extends Component {
    render() {
        return (
            <div>
                <h2> Child1 </h2>
                <Child2 />
            </div>
        )
    }
}
