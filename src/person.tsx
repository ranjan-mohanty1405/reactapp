import React from "react";
import { iperson } from "./iperson";

interface personprops{
    person:iperson
}

const Person: React.FC<personprops>=(props:personprops)=>{
 return(
    <>
    <table className='customers'>
        <tr>
            <th>Sl No.</th>
    <th>Name</th>
    <th>Age</th>
    <th>Mobile</th>
    <th>Email</th>
    <th>Address</th>
    <th>Landmark</th>
  </tr>
        {
        
        props.person.tabledata.map((x,i) => (
          <tr>
            <td>{i+1}</td>
            <td>{x.name}</td>
            <td>{x.age}</td>
            <td>{x.mobile}</td>
            <td>{x.email}</td>
            <td>{x.ads}</td>
            <td>
                {x.landamrkdata.map((y)=>(
                    <tr>{y.lname}</tr>
                ))}
            </td>
          </tr>
        ))
        }
      </table>
      </>
 );
}

export default Person;


