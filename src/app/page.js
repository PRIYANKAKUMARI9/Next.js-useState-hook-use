'use client'

import { useState } from "react";

export default function Home() {

const [Namee,setNamee]=useState(0)

const usee=()=>{
  setNamee(Namee+1)
}

const apple=()=>{
  alert("this is in function")
}

{/*ak componenet ke ander dusra component */}

const cc =()=> {
 return(
  <h1>inner component ak component ke andr dusra component</h1>
 )
}

  return (
    <main className="flex  flex-col items-center p-24">
     <h1 className=" bg-slate-800 text-red-600 p-6 mb-9 rounded-xl">Event Function and state learn</h1>
     <button onClick={apple} className=" text-white bg-red-600 p-2 rounded-md">click me</button>

 {/* UseState hook uses here */}
    
 <h1 className=" mt-8">This is  useState inc/decr= {Namee}</h1>
 <button onClick={usee}>click</button>
 
{/*ak component ke andr dusra component */}

{cc()}
    </main>
  );
}
