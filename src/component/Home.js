import React, { useState, useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

function Home(props) {
    var l_data = JSON.parse(localStorage.getItem('user'));
    const [users, setUsers] = useState(null);
    const [search, setSearch] = useState('');
    const usersPerPage = 1;
    const pageNumber = 0;
    // const [pageCount,setPageCount] = useState(0);

    function ondelete(i) {
        if (l_data.length == 1) {
            localStorage.removeItem("user");
            setUsers(null)
        } else {
            l_data.splice(i, 1);
            console.log("ID", l_data[i])
            localStorage.setItem("user", JSON.stringify(l_data));
            showData(pageNumber);
        }
    }
    // componentDidMount 
    useEffect(() => {
        if (users === null && l_data !== null) {
            showData(pageNumber);
        }
    }, []);

    if (l_data) {
        var pageCount = Math.ceil(l_data.length / usersPerPage);
        // setPageCount(pgcnt);
        // console.log("PAGECONT",pageCount)
    }

    function showData(number) {
        const pagesVisited = number * usersPerPage;
        if (l_data && number !== undefined) {
            var displayUsers = l_data.slice(pagesVisited, pagesVisited + usersPerPage);
            setUsers(displayUsers);
        }
        else {
            setUsers(l_data);
        }
    }

    function changePage({ selected }) {
        showData(selected);
    }
    const searchUser = (e) => {
        setSearch(e.target.value);

        if (e.target.value === '') {
            showData(pageNumber);
        }
        if (e.target.value !== '') {
            showData();
        }
    }

    return (
        <>

            <ul className='ul'>
                <li className='li'>
                    <Link to="/Adduser"> <button className="adduser">AddUser</button> </Link>
                </li>
                <li>
                    <input type='search' placeholder='Search' onChange={searchUser} />
                </li>
            </ul>
            <br />

            <div className="row">
            </div>
            <div id="showUsers"></div>
            <table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Country</th>
                        <th>File</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    {
                        users !== null && users.length > 0 && users.filter((val) => {
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
                                    <Link to={{ pathname: `/Edituser/${i}` }} >
                                        <button className="edit" >Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <button className="delete" onClick={ondelete.bind(this, i)} > Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <br />
            <br />

            <div className='App'>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={(pageCount === undefined) ? 0 : pageCount}
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
