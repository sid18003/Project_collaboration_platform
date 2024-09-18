import React, { useState } from 'react'

const Register = () => {

    const [email,setEmail] = useState('');
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [skills,setSkills]=useState('');
    const [role,setRole]=useState('');


    //submit Handler function for registration

  const submitHandler = async(e) =>{
    e.preventDefault();

    try{

        const response =  await fetch("http://localhost:4000/api/v1/user/create",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            password,
            skills,
            role
        }),


        });
        if (!response.ok) {
            throw new Error('Error while registering , please try again later');
        }

        const data = await response.json();
        console.log('Registration successful:', data);

    
    }
    catch(err){
console.log("error occured while reistering")
    }
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
        <div>
        <lable htmlfor="name" >Enter your name</lable>
        <input type='text' id='name' placeholder='Enter your name'  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
         value={name}
         onChange={(e)=>setName(e.target.value)}       
        >
        </input>
        </div>
        <div> 
         <lable htmlfor="email">Enter your email:</lable>
        <input type='email' id='email' placeholder='Enter your email' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        value={email}
         onChange={(e)=>setEmail(e.target.value)}

        >
          </input>
        </div>
        <div>
        <lable htmlfor="password">Create a Password:</lable>
        <input type='password' id='password' value={password} placeholder='create a password' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
        >
          </input>
        </div>
        <div>
        <lable htmlfor="skills">Add skills:</lable>
        <input type='text' id='skills' placeholder='Enter your skills' value={skills}  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={(e)=>{
            setSkills(e.target.value)
        }}
        >
        
         </input>
        </div>
         <div>
         <lable htmlfor="role">Specify a role(student/mentor):</lable>
        <input type='text' id='role' value={role} placeholder='specify your role'  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={(e)=>setRole(e.target.role)}
         >
          </input>
         </div>
        </div>
        <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
               >
                    Register
                </button>
      </form>
    </div>
  ) 
}

export default Register;
