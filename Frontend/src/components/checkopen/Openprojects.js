import React, { useEffect, useState } from 'react'

const Openprojects = () => {
    
     const [projects,openprojects] =useState([]);

     useEffect(()=>{
       try{ 
        const fetchProjects = async () =>{
            const  response = await fetch('http://localhost:4000/api/v1/user/see_open_projects');
            if(!response.ok){
                throw new Error("errror while fetching the open projects ")
            }
            const data = await response.json();
            console.log("fetched data : ",data);
            
             
     }
    }
    catch(error){
        console.log("Fetch error:", error.message);
    }
     });


    return (
    <div>
      <h1>the project are </h1>
    </div>
     
    


)
}

export default Openprojects
