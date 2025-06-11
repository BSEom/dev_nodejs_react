import { useState, useEffect } from "react"

const Inp2 = () => {

    // const [theme, setTheme] = useState("dark")
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"
    })

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggle = () => {
        setTheme(what => what === "light" ? "dark" : "light")
    }

    return(
        <>
            <div className={theme == "light" ? "light-mode" :"dark-mode"}>
                <h1>{theme == "light" ? "🏙️라이트 모드" : "🌆다크 모드"}</h1>
                <button onClick={toggle}>테마 변경</button>
            </div>
        </>
    )

}

export default Inp2