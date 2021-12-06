import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

const View = () => {
    const [ data, setData] = useState({})
    const { id } = useParams();

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

    return (
        <div className="container col-6 col-sm-4 col-md-8 p-4 bg-light rounded-3 text-center">
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <th>{data.first_name}</th>
                <th>{data.last_name}</th>
                <th>{data.email}</th>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default View
