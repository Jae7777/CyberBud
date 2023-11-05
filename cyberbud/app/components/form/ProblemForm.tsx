'use client'

import Dropdown from "./Dropdown"

const ProblemForm = () => {
  
  async function senddata(){
    alert("works");
    const response : Response = await fetch("/api/test.json", {
      method: "POST", 
      mode: "cors"
    });
    console.log(response);
  }
  

  return (
    <div className="text-center lg:my-12 my-4">
      <div className="
            bg-gradient-to-r 
            from-red-900 
            to-purple-500 
            inline-block 
            text-transparent 
            bg-clip-text
            text-2xl
          "
      >
        Let&apos;s Get Hacking
      </div>
      <div className="py-16">
      <form className="flex justify-center items-center gap-4">
        <Dropdown 
        key="1"
        options={["Easy", "Medium", "Hard"]}
        name="Difficulty"
        />
        <Dropdown 
        key="2"
        options={["C++", "python", "C"]}
        name="Difficulty"
        />
        <Dropdown 
        key="3"
        options={[
          "Buffer Overflow", 
          "Injection Attack", 
          "Spoofing"
        ]}
        name="Difficulty"
        />
      </form>
      {/* <!-- button to submit form, on new line  --!> */}
      </div>
      <button 
      onClick={() => senddata()}
      className="
          bg-purple-800 
          hover:bg-purple-900 
          text-white 
          font-bold 
          py-2 px-4 
          rounded
          outline-double
          outline-purple-600
      "
      >
      Generate Problem
      </button>
    </div>
  )
}

export default ProblemForm