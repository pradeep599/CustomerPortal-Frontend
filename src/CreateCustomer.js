import { useState } from "react";
import { insertCustomer } from "./CustomerService";
import { useNavigate } from "react-router-dom";


function CreateCustomer(){

    const navigate = useNavigate();

    const [customer,setCustomer] =useState({
        cname:'',
        city:'',
        phone:0,
        email:'',
        age:0,

    });

    const handleChange = (e) => {
        setCustomer({...customer,[e.target.name]:e.target.value});
        
    };

    const save = () => {
        insertCustomer(customer);
        navigate("/get");
     };

    return(
        <div>
            <h2> Create Customer Component</h2>
            <input type="text" name="cname" placeholder="CUSTOMERNAME" onChange={handleChange}></input>
            <input type="text" name="city" placeholder="CITY" onChange={handleChange}></input>
            <input type="text" name="phone" placeholder="PHONE" onChange={handleChange}></input>
            <input type="email" name="email" placeholder="EMAIL" onChange={handleChange}></input>
            <input type="text" name="age" placeholder="AGE" onChange={handleChange}></input>
            <input type="button" onClick={save} value="SUBMIT"></input>
        </div>
    );
}
export default CreateCustomer;