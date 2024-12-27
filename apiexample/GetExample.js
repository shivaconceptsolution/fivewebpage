import React from "react";

export class GetExample extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={res:[]}
    }
    componentDidMount()
    {
        fetch('https://gorest.co.in/public/v2/users').then(res=>res.json()).then((data)=>{
            this.setState({res:data});
           
        }).catch(console.log('problem to fetch data'));
    }
    render()
    {
        return(<div>
            <table className="table">
     <tr><th>ID</th><th>Name</th><th>Email</th><th>Gender</th></tr>
           
       {this.state.res.map((p,i)=>
      <tr><td>{p.id}</td><td>{p.name}</td><td>{p.email}</td><td>{p.gender}</td></tr>
     )}   
      </table>    
        </div>)
    }
}