import CodeMirror from "@uiw/react-codemirror"
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { useState, useEffect } from "react";

    
const Chatbox = () => {
  const [code, setCode] = useState('');
  const [counter, setCounter] = useState('1');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('api/generate_code', {
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
      } catch (error) {
        console.log(error);
        console.error('Error fetching code:', error);
      }
    }
    async function test(){
      const response = await fetch("/api/test.json");
      const data = await response.json();
      console.log(data);
      let key = "response" + counter;
      setCode(data['response1'])
      let tmp = counter + 1;
      setCounter(tmp);
    }
    fetchData();
    test();
   
  }, []);
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
        <title>Generated Code</title>
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
