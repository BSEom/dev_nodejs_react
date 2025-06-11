import { useState } from "react"

const Inp3 = () => {
    const [in1, setIn1] = useState(0)
    const [in2, setIn2] = useState(0)

    const handelIn1 = e => setIn1(e.target.value)
    const handelIn2 = e => setIn2(e.target.value)

    return(
        <>
            <h1>1. Input을 이용한 실시간 계산</h1>
            <div>
                <input type="text" onChange={handelIn1} placeholder={in1}/> + {" "}
                <input type="text" value={in2} onChange={handelIn2}/> = {in1 * 1 + in2 * 1}                
            </div>
            <div>
                <input type="text" value={in1} onChange={handelIn1}/> - {" "}
                <input type="text" value={in2} onChange={handelIn2}/> = {in1 * 1 - in2 * 1}                
            </div>
            <div>
                <input type="text" value={in1} onChange={handelIn1}/> x {" "}
                <input type="text" value={in2} onChange={handelIn2}/> = {in1 * in2 * 1}                
            </div>
            <div>
                <input type="text" value={in1} onChange={handelIn1}/> / {" "}
                <input type="text" value={in2} onChange={handelIn2}/> = {in1 / in2}                
            </div>

            <hr />

            {in1} + {in2} = {in1 * 1 + in2 * 1} <br />
            {in1} - {in2} = {in1 * 1 - in2 * 1} <br />
            {in1} x {in2} = {in1 * in2 * 1} <br />
            {in1} / {in2} = {in1 / in2} <br />
            
        
        </>

    ) 

}

export default Inp3