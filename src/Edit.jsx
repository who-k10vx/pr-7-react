import React, { useEffect, useState, } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Formm() {

    const { id } = useParams()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState('')
    const [showpass, setshowpass] = useState(false)

    const [record, setrecord] = useState([])
    let navigate = useNavigate()

    const submit = () => {

        if (!password || !email) {
            seterror("Enter all Value Necessary Email and Password")
            return false
        }

        let updateRecord = record.map((val) => {
            if (val.id == id) {
                return {
                    ...val,
                    email: email,
                    password: password
                }
            }
            return val;
        })
        setrecord(updateRecord);
        localStorage.setItem('user', JSON.stringify(updateRecord));
        alert("Record update");

        navigate('/')
    }



    useEffect(() => {
        
        let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []
        setrecord(all);

        let single = all.find(item => item.id == id);
        setemail(single.email)
        setpassword(single.password);

    }, [])


    return (
        <div>
            <h1 style={{ paddingTop: "8px" }}>Form</h1>
            <nav className="navbar navbar-expand-lg" style={{ background: "#9797974a" }}>
                <div className="container-fluid">
                    <button className="btn btn-primary" ><Link style={{ color: "white", textDecoration: "none" }} to={"/"}>Table</Link></button>
                </div>
            </nav >
            <center>


            </center>
            <form style={{ background: "#7f97949c", padding: "20px", margin: '20PX' }}>
                <center>
                    <h3 style={{ color: "#ff000099" }}>{error}</h3>
                </center>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" required value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input value={password} onChange={(e) => setpassword(e.target.value)} type={showpass ? "text" : "password"} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input onChange={() => setshowpass((showpass) => !showpass)} value={showpass} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="button" onClick={submit} className="btn btn-primary" >submit</button>
            </form>
        </div >
    )
}

export default Formm