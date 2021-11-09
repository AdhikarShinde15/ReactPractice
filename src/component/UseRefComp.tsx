import { useRef } from "react"

const UseRefComp = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <div>
            <input ref={inputRef}/>
        </div>
    )
}

export default UseRefComp
