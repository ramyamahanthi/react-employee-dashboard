import React from 'react';

//Hardcoded list of employees
 const employees = [
     { name: 'khaja', position: 'Software Engineer', department: 'Engineering' },
    { name: 'sravanthi', position: 'Product Manager', department: 'Product' },
    { name: 'allu arjun', position: 'icon star', department: 'pushpa' }
];

const EmployeeDashboard = () => {
   return (
       <div >
          <h2 >Employee List</h2>
            <ul >
                {employees.map((employee,index) => (
                    <li key={index} >
                        <h3>{employee.name}</h3>
                        <p>Position: {employee.position}</p>
                         <p>Department: {employee.department}</p>
                     </li>
                 ))}
             </ul>
         </div>
    );
 };

// // // Inline styles
// // const styles = {
// //     container: {
// //         padding: '10px',
// //         fontFamily: 'Arial, sans-serif',
// //     },
// //     title: {
// //         color: 'blue',
// //     },
// //     list: {
// //         listStyleType: 'none',
// //         padding: 0,
// //     },
// //     listItem: {
// //         border: '2px solid #ccc',
       
// //         borderRadius: '10px',
// //         padding: '10px',
// //         marginBottom: '10px',
// //         color:"black"
        
        
// //     },
// // };

export default EmployeeDashboard;
