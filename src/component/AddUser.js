import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// import Crud1 from './Crud1'

function AddUser(props) {
    // console.log("props",props);
    const { history } = props;
    const [user, setUser] = useState({
        Name: "",
        Country: 'australia',
        File: "",
        Gender: "",
        Id: 1
    });
    // <Crud1 />
    const { Name,
        Country,
        File,
        Gender,
        Id,
        Language } = user;

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });

        // console.log("input",user);
    }

    function handleChangeFile(e) {
        setUser({ ...user, [e.target.name]: e.target.files[0].name });
    }

    // const handleChangeLanguage = (e) => {
    //     const { Language } = user;
    //     const { name, checked } = e.target;
    //     Language[name] = checked;
    //     setUser({ ...user, Language });
    // }
    // const a = localStorage.getItem('user');
    // a.map((d,index) => {

    // });
    function onSubmit(e) {
        // console.log(user);
        e.preventDefault();
        JSON.stringify(user.Language);
        const fieldValue = localStorage.getItem('user');
        const items = (() => {
            return (fieldValue === null)
                ? []
                : JSON.parse(fieldValue);
        })();
        if (fieldValue !== null) {
            console.log("ID", items.length)
            user.Id = items.length + 1;
            setUser(user);
        }
        items.push(user);
        localStorage.setItem('user', JSON.stringify(items));
        history.push("/");
    }
    return (
        <div>
            <Link to="/"> <button className="adduser"> Users </button> </Link>
            <form
                onSubmit={onSubmit}
                method="post"
            >
                <div className="container">
                    <br />

                    <label className="lable"><b> Name </b></label>
                    <input
                        type="text"
                        id="name"
                        value={Name}
                        name="Name"
                        onChange={handleChange}
                        placeholder="Enter your name"
                    // required
                    />
                    <br />

                    <label className="lable"> <b> Gender</b>  </label>
                  
                    {/* <fieldset name='group1' id="group1" onClick={this.ongender}> */}
                    <input
                        type="radio"
                        name="Gender"
                        value="Male"
                        onClick={handleChange}
                    />  Male
                    <br/>
                    <input
                        type="radio"
                        name="Gender"
                        value="Female"
                        onClick={handleChange}
                    />  Female
                    {/* </fieldset> */}
                    <br />
                    <br />

                    <label htmlFor="country"> <b> Country </b></label>
                    <select id="country" name="Country"
                        value={Country}
                        onChange={handleChange}
                        required
                    >
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>

                    </select>
                    <br /><br />

                    <label className="lable"> <b> File Upload </b> </label>
                    <input
                        onChange={handleChangeFile}
                        name="File"
                        // value={File}
                        type="file"
                    // required
                    />
                    <br />

                    <button type="submit" className="registerbtn"> Submit </button>
                </div>
            </form>
        </div>
    )
}

export default AddUser;

