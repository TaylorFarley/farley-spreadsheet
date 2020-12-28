import React, { useState } from "react";
import {
  DataSheetGrid,
  checkboxColumn,
  textColumn,
} from 'react-datasheet-grid'
//  import 'react-datasheet-grid/dist/index.css'
import './style.css'
const App = () => {
  const [ data, setData ] = useState([
    { active: true, firstName: 'Elon', lastName: 'Musk' },
    { active: false, firstName: 'Jeff', lastName: 'Bezos' },
  ])

  const columns = [
    checkboxColumn({ title: 'Active', key: 'active' }),
    textColumn({ title: 'First name', key: 'firstName' }),
    textColumn({ title: 'Last name', key: 'lastName' }),
  ]

console.log(data)
  return (
    <>
    <DataSheetGrid
    data={data}
    onChange={setData}
    columns={columns}
    
  />
  {/* <table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</table> */}
  </>
  
  );
};

export default App;
