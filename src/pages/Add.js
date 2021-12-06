import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const Add = () => {
    let fnameinput = React.createRef();
    let lnameinput = React.createRef();
    let emailinput = React.createRef();
    const n = useNavigate();

    const add_employee = () => {
        const update = {
            first_name: fnameinput.current.value,
            last_name: lnameinput.current.value,
            email: emailinput.current.value
        }
        axios.post(`http://localhost:8089/employee/`, update)
        .then(
            n('/viewall')
        )
    }

    return (
        <div className="container col-6 col-sm-4 col-md-8 p-4 bg-light rounded-3 text-center">
        <label>First Name: </label>
        <input ref={fnameinput} placeholder="Enter your first name..."></input><br/>
        <label>Last Name: </label>
        <input ref={lnameinput} placeholder="Enter your last name..."></input><br/>
        <label>Email:</label>
        <input ref={emailinput} placeholder="Enter your email..."></input><br/>
        <button className="btn btn-primary" onClick={add_employee}>Add Employee</button>
      </div>
    )
}

export default Add
