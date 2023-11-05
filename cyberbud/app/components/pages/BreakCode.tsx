import { useState } from "react"
import dynamic from "next/dynamic"
import IDE from "../IDE"
async function sendData(data = {}){
    const response = await fetch("/src/runcode", {
        method:'POST',
        mode:'cors'
    });
}
export default function BreakCode(){
    return(
        <>
            <IDE></IDE>
            <button className="btn" onClick={sendData}>
                Finish
            </button>
        </>
    )
}