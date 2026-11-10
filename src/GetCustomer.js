import { useEffect, useState } from "react";
import { deleteCustomerById, getCustomers } from "./CustomerService";
import { useNavigate } from "react-router-dom";


function GetCustomers(){

    const [customers,setCustomers] = useState([]);

    const navigate=useNavigate();

    useEffect(() => {
        loadData();
    },[]);

    const loadData = async () => {
        const result = await getCustomers();
        setCustomers(result.data);
    };

    const deleteCustomer = async (cid) =>{
        await deleteCustomerById(cid);
        loadData();
    };

    return(
        <div>
            <h2>Getting the Students</h2>
            <table border="1">
                <thead>
                    <th>CID</th>
                    <th>CNAME</th>
                    <th>CITY</th>
                    <th>AGE</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th colSpan="2">ACTION</th>
                </thead>
                <tbody>
                    {customers.map(c =>(
                        <tr key={c.key}>
                            <td>{c.cid}</td>
                            <td>{c.cname}</td>
                            <td>{c.city}</td>
                            <td>{c.age}</td>
                            <td>{c.email}</td>
                            <td>{c.phone}</td>
                            <td><input type="button" value="EDIT" onClick={()=>{navigate(`/edit/${c.cid}`)}}></input></td>
                            <td><input type="button" value="DELETE" onClick={()=>{deleteCustomer(c.cid)}}></input></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default GetCustomers;