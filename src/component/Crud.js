import React, { Component } from 'react'

export default class Crud extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {value: '', Gender:''};
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }

    //   handleChange(e) {    
    //     //   this.setState({Gender: e.target.value});  
    //     console.log(e);
    //     }

    state = {
        isEnglish: false,
        isHindi: false,
        // isBanana: false,
        // isCherry: false,
        // isAvocado: false
    };

    //   onChangeEnglish = () => {
    //     this.setState({isEnglish:'English'});
    //   }
    onChangeEnglish = (e) => {

        this.setState({ [e.target.name]: e.target.checked });
    }

    onChangeHindi = () => {
        this.setState({ isHindi: 'Hindi' });
    }

    handleSubmit(event) {
        //   console.log(this.state.isEnglish);
        // alert(this.state.isEnglish);
        event.preventDefault();
    }

    render() {

        return (
            <div>
                <form >
                    <div class="container">
                        <label><b> Id</b> </label>
                        <input type="number" id="id" placeholder="Enter ID" />
                        <br />

                        <label><b> Name </b></label>
                        <input type="text" id="name" placeholder="Enter your name" value={this.state.value} onChange={this.handleChange} />
                        <br />

                        <label> <b> Gender</b>  </label>
                        {/* <fieldset id="group1" > */}
                        <input type="radio" name="group1" value={this.state.Gender} onClick={this.handleChange} /> Male
                        <input type="radio" name="group1" value={this.state.Gender} />Female
                        {/* </fieldset> */}
                        <br />

                        <label> <b> Language </b> </label>
                        {/* <fieldset id="group2"> */}
                        <label>
                            <input type="checkbox" name="English" checked={this.state.isEnglish} onChange={this.onChangeEnglish} />
                            English
                        </label>

                        <label>
                            <input type="checkbox" checked={this.state.isHindi} onChange={this.onChangeHindi} />
                            Hindi
                        </label>

                        {/* <input type="checkbox" value="Hindi" name="group2"/> Hindi
                                <input type="checkbox" value="Gujarati" name="group2"/> Gujarati */}
                        {/* </fieldset> */}
                        <br />
                        {console.log(this.state.isEnglish)}
                        <label for="country"> <b> Country </b></label>
                        <select id="country" name="country">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>
                        <br />

                        <label> <b> File Upload </b> </label>
                        <input type="file" id="fileupload" />
                        <br />

                        <button type='button' class="registerbtn" onClick={this.handleSubmit} > <b> Submit </b></button>
                    </div>
                </form>
            </div>
        )
    }
}

