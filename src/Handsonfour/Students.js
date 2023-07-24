import React, { useState } from 'react'
import './Compo.css'
function Students() {
    const [data] = useState([
        {
            Name: 'Abcd',
            Age: 21,
            Cource: 'MERN',
            Batch: 'EA23',
            Change: 'Edit'
        },
        {
            Name: 'Abcr',
            Age: 22,
            Cource: 'MERN',
            Batch: 'EA23',
            Change: 'Edit'
        },
        {
            Name: 'Abce',
            Age: 23,
            Cource: 'MERN',
            Batch: 'EA23',
            Change: 'Edit'
        },
        {
          Name: 'Acvf',
          Age: 22,
          Cource: 'MERN',
          Batch: 'EA23',
          Change: 'Edit'
      },
      {
        Name: 'Azxs',
        Age: 21,
        Cource: 'MERN',
        Batch: 'EA23',
        Change: 'Edit'
    },
    {
      Name: 'Abxd',
      Age: 21,
      Cource: 'MERN',
      Batch: 'EA23',
      Change: 'Edit'
  },
    ])
  return (
    <>
      <h1>Student Details</h1>
      <button className='Add'>Add new Student</button>
       <table border='3px' cellPadding='15px' cellSpacing='15px'>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Cource</th>
                <th>Batch</th>
                <th>Change</th>
              </tr>
      {
        data.map((item, index) =>{
          return(
           
              <tr key={index}>
                <td>{item.Name}</td>
                 <td>{item.Age}</td>
                  <td>{item.Cource}</td>
                  <td>{item.Batch}</td>
                   <td>{item.Change}</td>
              </tr>
            
          )
        })
      }
      </table>
    </>
  )
}

export default Students
