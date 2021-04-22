import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Message = (props) => {
    const {category} = props
    const [joke, setJoke] = useState('')

//API Call//
    useEffect(()=>{
        axios.get(`https://api.chucknorris.io/jokes/random?${category}`)
        .then((response)=>{
            const result = response.data
            setJoke(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }, [category])
//API Call//

//API Call for Next Joke//    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get(`https://api.chucknorris.io/jokes/random?${category}`)
        .then((response)=>{
            const result = response.data
            setJoke(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
//API Call for Next Joke//

//style//
    const formStyle = {
        textAlign: "center",
        marginTop: '10px'
    }

    const cardStyle = {
        border: "2px solid",
        borderRadius: "10px",
        backgroundColor: "deepskyblue",
        color: "white"
    }
//style//

    return (
        <div>
            <div className = "container" style = {cardStyle}>
                <p>{joke.value}</p>
            </div>
            <div style = {formStyle}>
                <form onSubmit = {handleSubmit}>
                    <button type = "submit" className="btn btn-link">Next Joke</button>
                </form>
            </div>
        </div>
    )
}
export default Message