import React, { useEffect, useState } from "react";

export default function FGetExample()
{
        const [res,setRes] = useState([])
        useEffect(()=>{
        fetch('https://gorest.co.in/public/v2/users').then(res=>res.json()).then((data)=>{
             setRes(data);}).catch(console.log('problem to fetch data'));
       });
    
    
        return (<div>
            <table className="table">
     <tr><th>ID</th><th>Name</th><th>Email</th><th>Gender</th></tr>
           
       {res.map((p,i)=>
      <tr><td>{p.id}</td><td>{p.name}</td><td>{p.email}</td><td>{p.gender}</td></tr>
     )}   
      </table>    
        </div>)
    
}