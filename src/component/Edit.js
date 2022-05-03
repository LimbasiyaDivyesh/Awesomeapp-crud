import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function Edit(props) {
    const { history } = props
    const [user, setUser] = useState({
        Name: "",
        Country: '',
        File: "",
        Gender: "",
        Id: ""
    });

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    function handleChangeFile(e) {
        setUser({ ...user, [e.target.name]: e.target.files[0].name });
    }

    // function handleChangeFile(e) {
    //     setUser({ ...user, [e.target.name]: e.target.files[0].name });
    //     // console.log(e.target.value);
    // }
    // console.log(user);
    var i = props.match.params.id;
    var user_data = JSON.parse(localStorage.getItem("user"));
    var data = user_data[i];
    useEffect(() => { 
        setUser({ ...data });
    }, []);

    if (user.Gender == "Female") {
        var check1;
        check1 = true;
    }

    if (user.Gender == "Male") {
        var check;
        check = true;
    }
    // console.log("update", user);
    function onSubmit(e) {
        // data = user
        user_data[i] = user;
        localStorage.setItem('user', JSON.stringify(user_data));
        history.push("/");
    }
    return (
        <div>
            <Link to="/"> <button className="adduser">Users</button> </Link>
            <form onSubmit={onSubmit} method="post">
                <div className="container">
                    {/* <label className="lable"><b> Id</b> </label> */}
                    {/* <input
                        type="number"
                        id="id"
                        name='Id'
                        value={user.Id}
                        onChange={handleChange}
                        placeholder="Enter ID"
                        required
                    /> */}
                    <br />
                    <label className="lable">
                        <b>
                            Name
                        </b>
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={user.Name}
                        name="Name"
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                    <br />

                    <label className="lable"> <b> Gender</b>  </label>
                    <input
                        type="radio"
                        name="Gender"
                        value="Male"
                        checked={check}
                        onClick={handleChange}
                    />
                    Male
                    <br />
                    <input
                        type="radio"
                        name="Gender"
                        value="Female"
                        checked={check1}
                        onClick={handleChange}
                    />
                    Female
                    {/* </fieldset> */}
                    <br />
                    <br />

                    <label htmlFor="country"> <b> Country </b></label>
                    <select
                        name="Country"
                        value={user.Country}
                        onChange={handleChange}
                        required
                    >
                        {/* <option> </option> */}
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>
                    <br /><br />

                    <label className="lable"> <b> File Upload </b> </label>
                    <input
                        onChange={handleChangeFile}
                        src={user.File}
                        name="File"
                        type="file"
                    />
                    <br />

                    <button type="submit" className="registerbtn"> Submit </button>
                </div>
            </form>
        </div>
    )
}
export default Edit;