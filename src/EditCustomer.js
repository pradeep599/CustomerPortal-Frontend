import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCustomerById, updateCustomerById } from "./CustomerService";


function EditCustomer(){

    const {id} = useParams();
    const [customer,setCustomer] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        loadData();
    },[]);

    const loadData = async () => {
        const result = await getCustomerById(id);
        setCustomer(result.data);
    };

    const handleChange = (e) => {
        setCustomer({...customer, [e.target.name]:e.target.value});
    };

    const update = async () => {
       await updateCustomerById(id,customer);
        navigate("/get");
    };

    return(
        <div>
            <h2>Edit Customer Component</h2>
            <input type="text" name="cid" value={customer.cid}></input>
            <input type="text" name="cname" value={customer.cname} onChange={handleChange}></input>
            <input type="text" name="city" value={customer.city} onChange={handleChange}></input>
            <input type="text" name="phone" value={customer.phone} onChange={handleChange}></input>
            <input type="email" name="email" value={customer.email} onChange={handleChange}></input>
            <input type="text" name="age" value={customer.age} onChange={handleChange}></input>
            <input type="button" value="UPDATE" onClick={update}></input>
        </div>
    );
}
export default EditCustomer;