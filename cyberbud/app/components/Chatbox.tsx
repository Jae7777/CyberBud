import CodeMirror from "@uiw/react-codemirror"
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { useState, useEffect } from "react";

    
const Chatbox = () => {
  const [code, setCode] = useState('');
  const [counter, setCounter] = useState('1');

    async function fetchData() {
        const response = await fetch("/api/generate_code", {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                difficulty: "easy",
                exploit_type: "buffer_overflow",
                language: "c"
            })
        });


        const data = await response.json();
        console.log(data['code']); 
        setCode(data['code']);

    async function test(){
      const response = await fetch("/api/test.json");
      const data = await response.json();
      let key = "response" + counter;
      setCode(data['key'])
      let tmp = counter + 1;
      setCounter(tmp);
    }
    fetchData();

   // test();
    } 
  return (
    <div className="
        grid
        grid-cols-2
        justify-center
        align-center
      ">
      <div>
        {/* Display the generated code */}
        <div>
          generated problem
        </div>
        <div>
          {code && <pre>{code}</pre>}
        </div>
      </div>
      
      <div className="">
        <div>
          chatbox
        </div>
        <div className="mx-auto">
          <CodeMirror
            theme={vscodeDark}
            className="w-3/4 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Chatbox;
