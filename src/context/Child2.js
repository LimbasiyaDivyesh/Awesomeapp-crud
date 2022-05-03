import React, { Component } from 'react';
import { context } from './Context';

export default class Chaild2 extends Component {
    render() {
        return (
            <>
                <h3> Child2 </h3>
                <context.Consumer>
                    {data => <h6> {data.name} {data.lname} </h6>}
                </context.Consumer>
            </>
        )
    }
}
