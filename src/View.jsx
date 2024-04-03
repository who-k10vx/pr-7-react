import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Loading from './Loading';

function Table() {

    const [record, setrecord] = useState([])
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        const rec = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(rec)
    }, [])


    useEffect(() => {

        if (searchValue.length === 0) {
            let rec = JSON.parse(localStorage.getItem("user"))
            setrecord(rec)
        } else if (searchValue.length === 1) {
            const search = record.filter(value => value.email.toLowerCase().includes(searchValue.toLowerCase()))
            setrecord(search)
        }
        else {
            const search = record.filter(value => value.email.toLowerCase().includes(searchValue.toLowerCase()))
            setrecord(search)
        }

    }, [searchValue])


    const remove = (id) => {
        let copy = [...record]
        let deleterecord = copy.filter((val) => {
            return val.id !== id
        })
        setrecord(deleterecord)
        localStorage.setItem("user", JSON.stringify(deleterecord))
        console.log(id);
    }

    const reset = (id) => {
        let rec = JSON.parse(localStorage.getItem("user"))
        setrecord(rec)
    }

  


    return (
        <div>
            <h1 style={{ paddingTop: "8px" }}>Table </h1>
            <nav className="navbar navbar-expand-lg" style={{  marginBottom: "10px" }}>
                <div className="container-fluid">
                    <button className="btn btn-primary" ><Link style={{ color: "white", textDecoration: "none" }} to={"/addrecord"}>Form</Link></button>
                    <form className="d-flex" role="search">
                        <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue}
                            className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" onClick={reset} type="button">reset</button>
                    </form>
                </div>
            </nav >

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">email</th>
                        <th scope="col">password</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record && record.map((val) => {
                            return (
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.email}</td>
                                    <td>{val.password}</td>
                                    <td><button type="button" class="btn btn-danger" style={{ marginRight: "5PX" }} onClick={() => remove(val.id)}  >Delete</button>
                                        <button type="button" class="btn btn-success" style={{ marginRight: "5PX" }} ><Link style={{ color: "white", textDecoration: "none" }} to={`/editrecord/${val.id}`}>
                                            Edit
                                        </Link></button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div >
    )
}

export default Table