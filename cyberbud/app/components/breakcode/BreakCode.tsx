import { useState } from "react"
import dynamic from "next/dynamic"
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
      description: "Use buffer overflow to trigger an unintended function.",
      href:"https://www.fortinet.com/resources/cyberglossary/buffer-overflow"
    },
    {
      id: 2,
      title: "SQL Injection",
      difficulty: 3.0,
      description: "Access information that was not meant to be displayed.",
      href:"https://owasp.org/www-community/attacks/SQL_Injection"
    },
    {
      id: 3,
      title: "DDoS Attack",
      difficulty: 1.8,
      description: "Overwhelm the target server by using a volume of fake requests.",
      href:"https://www.cloudflare.com/learning/ddos/glossary/denial-of-service/"
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
        <div className="text-2xl text-red-700" id="about">
          Break The Code
        </div>
        {problems.map((item) => {return (
          <Problem 
            key={item.id}
            title={item.title} 
            difficulty={item.difficulty}
            description={item.description} 
            href={item.href}
          />
        )})}
      </div>
    </>
  )
}