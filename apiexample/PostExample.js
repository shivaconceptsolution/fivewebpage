import React from "react";
export class PostExample extends React.Component
{
   constructor()
   {
    super();

    this.state = {}
   }

   componentDidMount()
   {
    const token = 'c1c7fa5775f13f847f27051131afb2621a0cb317ee666d28e3e88d22defcc5b8';
    fetch('https://gorest.co.in/public/v2/users',{
      method: 'POST',
      body: JSON.stringify({
          name:'mno',
          email:'mno@gmail.com',
          gender:'male',
          status:'active'
      }),
      headers:{
        "Authorization": `Bearer ${token}`,
        "content-type":"application/json; charset=UTF-8"
    }  
    }).then(res => res.json())

    .then((data) => {

       console.log(data)

    })

    .catch(console.log)
   }



   render()

   {

       return(

           <div>
             <h1>POST METHOD</h1>
           </div>
       )
   }
}