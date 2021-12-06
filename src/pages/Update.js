import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom'

const Update = () => {
    let fnameinput = React.createRef();
    let lnameinput = React.createRef();
    let emailinput = React.createRef();

    const [ data, setData] = useState({})
    const { id } = useParams();
    const n = useNavigate();

    useEffect(()=> {
        axios.get(`http://localhost:8089/employee/${id}`)
        .then(res => {
            console.log(res)
        setData(res.data)
        console.log("success")
        })
        .catch(err=> {
        console.log(err)
        })
    }, [])

    const update_employee = () => {
        const update = {
            first_name: fnameinput.current.value == '' ? data.first_name : fnameinput.current.value,
            last_name: lnameinput.current.value == '' ? data.last_name : lnameinput.current.value,
            email: emailinput.current.value == '' ? data.email : emailinput.current.value
        }
        axios.put(`http://localhost:8089/employee/${id}`, update)
        .then(
            n('/viewall')
        )
    }

    return (
        <div className="container col-6 col-sm-4 col-md-8 p-4 bg-light rounded-3 text-center">
        
        <label>First Name: </label>
        <input ref={fnameinput} placeholder={data.first_name}></input><br/>
        <label>Last Name: </label>
        <input ref={lnameinput} placeholder={data.last_name}></input><br/>
        <label>Email:</label>
        <input ref={emailinput} placeholder={data.email}></input><br/>
        <button className="btn btn-primary" onClick={update_employee}>Submit Changes</button>
      </div>
    )
}

export default Update
