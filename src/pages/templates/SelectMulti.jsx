import { useEffect } from "react"

const SelectMulti = () => {
    const selOptions = []
    const answers = []
    
    useEffect(()=>{

    }, [])

    const onClickOption = (e) => {
        
    }

    return <div>
        <p></p>
        {selOptions.map((option)=>{
            return <div>{option}</div>
        })}
    </div>
}

export default SelectMulti