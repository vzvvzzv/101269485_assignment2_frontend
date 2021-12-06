
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

const ViewAll = () => {
    const [ data, setData] = useState([])

   useEffect(()=> {
     axios.get('http://localhost:8089/employee')
     .then(res => {
       setData(res.data)
       console.log("success")
     })
     .catch(err=> {
       console.log(err)
     })
   },[])

   const delete_employee = (id) => {
      console.log(id)
      axios.delete(`http://localhost:8089/employee/${id}`)
      .then(res => {
        console.log(res)
      })
      .catch(err=> {
        console.log(err)
      })
      window.location.reload(false);
   }

    return (
        <div className="container col-6 col-sm-4 col-md-8 p-4 bg-light rounded-3 text-center">
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              {data.map(item => {
                return(
                  <tr key={item._id}>
                    <th>{item.first_name}</th>
                    <th>{item.last_name}</th>
                    <th>{item.email}</th>
                    <th>
                      <div>
                        <Link to={`/view/${item._id}`} className="btn btn-info">View</Link>&nbsp;
                        <Link to={`/update/${item._id}`} className="btn btn-warning">Update</Link>&nbsp;
                        <button 
                          className="btn btn-danger" 
                          onClick={() => {delete_employee(item._id)}}
                        >Delete</button>
                      </div>
                    </th>
                  </tr>
                )
              })}
          </tbody>
        </table>
      <Link to='/add' className="btn btn-primary">Add Employee</Link>
      </div>
    )
}

export default ViewAll;