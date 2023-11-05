import CodeMirror from "@uiw/react-codemirror"
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { useState, useEffect } from "react";


async function generteCodeFromData() {
    try {
      //get the form data from the form
        const requestBody = {
          difficulty: document.getElementById("diff"),
          language: document.getElementById("lang"),
          type: document.getElementById("type"),
        };
        // Send a POST request to the server with the form data and get the return value of the function as a response
        const response = await fetch('/generate-code', {    
          
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),

      });
      
    console.log(response.text());
         

      // Check if the response status is OK (200)
      if (response.status === 200) {
        // Assuming the response contains the generated code
        const programcode = await response.text();  
        return programcode;
       } else {
        // Handle the case where the server returned an error
        console.error('Error: Unable to generate a response');
      }
    } catch (error) {
      // Handle network errors or exceptions
      console.error('An error occurred:', error);
    }
    
}

const Chatbox = () => {
  const [code, setCode] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const generatedCode = await generteCodeFromData();
        setCode(generatedCode || '');
      } catch (error) {
        console.error('Error fetching code:', error);
      }
    }

    fetchData(); // Call the fetchData function
  }, []);

  return (
    <div className="
        grid
        grid-cols-2
        justify-center
        items-center
        align-center
        text-center
    ">
      <div>
        {/* Display the generated code */}
        <div>
          generated problem
        </div>
        <div>
          {code && <pre>{code}</pre>}
          <code>
            {code}
          </code>
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
