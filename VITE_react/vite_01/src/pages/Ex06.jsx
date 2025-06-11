import { useState } from "react"
import list from "./list"

const Check = () => {

    const [ck, setCk] = useState({"HTML": false, "CSS": false, "JavaScript": false, "JAVA": false, "Python": false, "ORACLE": false, "MySQL": false, "Nodejs": false})

    // const handelCk = e => setCk(e.target.value)
    const handelCk = e => {
        const { value, checked} = e.target
        setCk(data =>{

            return { ...data, [value]: checked }
        })
    }
    return(
        <>
            <h1>6. 체크박스값 확인</h1>
            <h5>{JSON.stringify(ck)}</h5>

            {list.map((v, i) => {
                return (

                    <span key={i}>
                        <input type="checkbox" value={v} onChange={handelCk} />{v} {" | "} 
                    </span>

                )
            })}

            <ol style={{ "listStylePosition": "inside"}}>
                {list
                .filter(p => ck[p])
                .map(v => <li>{v}</li>)}
            </ol>
        </>
    )

}


export default Check