import React, { useState, useContext } from 'react';
import { useGet } from "../hooks/API.js"
import "./Table.css"
import Button from "./Button.js"
import { EmployeeContext } from './EmployeeContext.js';

function Table() {

    const [url] = useState("https://randomuser.me/api/?results=10")
    // custom hook used for getting the employees from the api and storing the sort functions
    const { sortFunc } = useGet(url);
    // contains the employees to display in the table
    const { displayedEmployees } = useContext(EmployeeContext)

    return (
        <table>
            <thead>
                <tr>
                    <td onClick={() => sortFunc("firstName")}><Button>First Name</Button></td>
                    <td onClick={() => sortFunc("lastName")}><Button>Last Name</Button></td>
                    <td onClick={() => sortFunc("userName")}><Button>Username</Button></td>
                    <td>Gender</td>
                    <td>E-mail</td>
                    <td onClick={() => sortFunc("age")}><Button>Age</Button></td>
                    <td>Picture</td>
                </tr>
            </thead>
            <tbody>
                {displayedEmployees.map(employee => {
                    return (
                        <tr key={employee.login.uuid}>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.login.username}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.email}</td>
                            <td>{employee.dob.age}</td>
                            <td><img alt="user thumbnail" src={employee.picture.thumbnail} /></td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    )
}
export default Table;