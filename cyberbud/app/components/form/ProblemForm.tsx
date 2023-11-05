'use client'

import Dropdown from "./Dropdown"



interface ProblemFormProps {
  toggle: () => void;
}
const ProblemForm: React.FC<ProblemFormProps> = ({
  toggle,
}) => {
  
  
  
  async function sendData() {
    //call the fastapi endpoint to generate_code  
    //send the data from the form as params

    //get the response
    //set the response to the state
    //toggle the modal
    toggle()
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
      <form className="
        grid 
        grid-cols-1 
        sm:grid-cols-3
        md:grid-cols-3
        lg:grid-cols-3 
        items-center 
        gap-4
      ">
        <Dropdown 
          key="1"
          options={["Easy", "Medium", "Hard"]}
          name="Difficulty"
          id="diff"
        />
        <Dropdown 
          key="2"
          options={["C++", "python", "C"]}
          name="Difficulty"
          id="lang"
        />
        <Dropdown 
          key="3"
          options={[
            "Buffer Overflow", 
            "Injection Attack", 
            "Spoofing"
          ]}
          name="Difficulty"
          id="type"
        />
      </form>
      {/* <!-- button to submit form, on new line  --!> */}
      </div>
      <button 
      onClick={() => sendData()}
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
