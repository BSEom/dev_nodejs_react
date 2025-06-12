import { useState, useEffect } from "react"

const TodoList = () => {
    const [indata, setIndata] = useState("")
    const [arr, setArr] = useState([])
   
    const [ckdata, setCkdata] = useState({indata: false})

    const handleInput = (e) => {
        setIndata(e.target.value)
    }
    const handleAdd = () => {
        setArr([...arr, indata])
        setIndata("")
        console.log(arr,"!")
    }

    const handelPress = (e) => {
        if (e.key=="Enter")
        {
            handleAdd()
        }
    }

    // const handelCk = (e) => {
    //     console.log(e.target.id, e.target.value, e.target.checked)
    // }

    const delcl = () => {

    }

    return(
        <>
            <h1>8. 어레이를 이용한 ToDoList</h1>
            <label htmlFor="inin">배열요소 입력 : </label>
            <input type="text" id="inin" onChange={handleInput} onKeyDown={handelPress} value={indata}/>{" "}
            <button onClick={handleAdd}>추가</button>
            <button onClick={delcl} disabled={!(arr.length > 0)}>삭제</button>
            <div>{indata}</div>
            <hr />
            {/* <div>{arr}</div> */}
            {arr.map((v, i) => {
                return(
                    <div id={i+1} key={i} ><input type="checkbox" id={i+1} value={v} onChange={handelCk}/>{`${i+1}: ${v}`}</div>
                )
            })}
        </>
    )

}

export default  TodoList