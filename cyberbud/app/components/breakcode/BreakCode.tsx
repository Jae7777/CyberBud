import { useState } from "react"
import dynamic from "next/dynamic"
import IDE from "../IDE"
import Problem from "./Problem";

async function sendData(data = {}){
    const response = await fetch("/src/runcode", {
        method:'POST',
        mode:'cors'
    });
}
export default function BreakCode() {
  const problems = [
    {
      id: 1,
      title: "Buffer Overflow",
      difficulty: 2.1,
      description: "Use buffer overflow to trigger an unintended function."
    },
    {
      id: 2,
      title: "SQL Injection",
      difficulty: 3.0,
      description: "Access information that was not meant to be displayed."
    },
    {
      id: 3,
      title: "DDoS Attack",
      difficulty: 1.8,
      description: "Overwhelm the target server by using a volume of fake requests."
    }
  ]
  return(
    <>
      <div className="
        py-24
        justify-center
        mx-auto
        text-center
      ">
        <div className="text-2xl text-red-700">
          Break The Code
        </div>
        {problems.map((item) => {return (
          <Problem 
            id={item.id}
            title={item.title} 
            difficulty={item.difficulty}
            description={item.description} 
          />
        )})}
      </div>
    </>
  )
}