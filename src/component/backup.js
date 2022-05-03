import React, { useState, useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

function Home(props) {

    const [users, setUsers] = useState(null);
    const [search, setSearch] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    function ondelete(i) {
        if (users.length == 1) {
            localStorage.removeItem("user");
            setUsers(null)
        } else {
            users.splice(i, 1);
            localStorage.setItem("user", JSON.stringify(users));
            showData();
        }
    }
    // componentDidMount 
    useEffect(() => {
        if (users !== null) {
            showData()
        }
    }, []);

    function showData() {
        let user_records = JSON.parse(localStorage.getItem("user"));
        if (user_records) {
            setUsers(user_records);
        }
    }
    const usersPerPage = 2;
    const pagesVisited = pageNumber * usersPerPage;
    var l_data = JSON.parse(localStorage.getItem('user'));
    var displayUsers = l_data.slice(pagesVisited, pagesVisited + usersPerPage);

    const pageCount = Math.ceil(l_data.length / usersPerPage);
    function changePage({ selected }) {
        setPageNumber(selected);
        console.log("page", selected);
    }
    return (
        <>

            <ul className='ul'>
                <li className='li'>
                    <Link to="/Adduser"> <button className="adduser">AddUser</button> </Link>
                </li>
                <li>
                    <input type='search' placeholder='Search' onChange={(e) => { setSearch(e.target.value) }} />
                </li>
            </ul>
            <br />

            <div className="row">
            </div>
            <div id="showUsers"></div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Country</th>
                        <th>File</th>
                        {/* <th>Language</th> */}
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    {

                        displayUsers !== null && displayUsers.length > 0 && displayUsers.filter((val) => {
                            if (search == '') {
                                return val
                            }
                            else if (val.Name.toLowerCase().includes(search)) {
                                return val;
                            }
                        }).map((d, i) => (
                            <tr key={i}>
                                <td>{d.Id}</td>
                                <td>{d.Name}</td>
                                <td>{d.Gender}</td>
                                <td>{d.Country}</td>
                                <td>{d.File}</td>
                                {/* <td>{
                                Object.keys(JSON.parse(d.Language)).filter(
                                    (Language) => JSON.parse(d.Language)[Language]
                                ) + ""
                            }
                            </td> */}
                                <td>
                                    <Link to={{ pathname: `/Edituser/${i}` }} id="" >
                                        <button className="edit" >Edit</button>
                                    </Link>
                                </td>
                                <td>  <button className="delete" onClick={() => (ondelete(i))} id={d.Id} > Delete </button></td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div className='App'>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                >
                </ReactPaginate>
            </div>
        </>
    );

}
export default Home;
