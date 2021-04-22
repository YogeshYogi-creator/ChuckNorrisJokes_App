import React, {useState} from 'react'
import Message from './Message'

const Buttons = () => {
    const [category, setCategory] = useState('')

//callBack Functions//
    const handleAmimalChange = () =>{
        setCategory("animal")
    }
    
    const handleCareerChange = () => {
        setCategory("career")
    }

    const handleCelebrityChange = () => {
        setCategory("celebrity")
    }

    const handleDevChange = () => {
        setCategory("dev")
    }

    const handleExplicitChange = () => {
        setCategory("explicit")
    }

    const handleFashionChange = () => {
        setCategory("fashion")
    }

    const handleFoodChange = () => {
        setCategory("food")
    }

    const handleHistoryChange = () => {
        setCategory("history")
    }

    const handleMoneyChange = () => {
        setCategory("history")
    }

    const handleMovieChange = () => {
        setCategory("movie")
    }

    const handleMusicChange = () => {
        setCategory("music")
    }

    const handlePoliticalChange = () => {
        setCategory("political")
    }

    const handleReligionChange = () => {
        setCategory("religion")
    }

    const handleScienceChange = () => {
        setCategory("science")
    }

    const handleSportChange = () => {
        setCategory("sport")
    }

    const handleTravelChange = () => {
        setCategory("travel")
    }
//callBack Functions//

//Capitalise first letter JavaScript code//
    let cap = `${category}`.slice(0,1).toUpperCase() + `${category.slice(1)}`
//Capitalise first letter JavaScript code//

//style//
    const btnStyle = {
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
        color: "black"
    }
    const btnDiv = {
        textAlign: "center", 
        backgroundColor: "lightgray",
        border: "2px solid",
        borderRadius: "20px"
    }

    const messageStyle = {
        position: "relative",
        top: 20
    }
//style//

    return (
        <div className = "row">
            <div className = "col-md-6">
                <div style = {btnDiv}>
                    <button style = {btnStyle} className="btn btn-outline-primary" onClick = {handleAmimalChange}>Animal</button>
                    <button style = {btnStyle} className="btn btn-outline-primary" onClick = {handleCareerChange}>Career</button>
                    <button style = {btnStyle} className="btn btn-outline-primary" onClick = {handleCelebrityChange}>Celebrity</button>
                    <button style = {btnStyle} className="btn btn-outline-primary" onClick = {handleDevChange}>Dev</button> 
                    <button style = {btnStyle} className="btn btn-outline-primary" onClick = {handleExplicitChange}>Explicit</button>
                    <button style = {btnStyle} className="btn btn-outline-primary" onClick = {handleFashionChange}>Fashion</button>
                    <button style = {btnStyle} className="btn btn-outline-primary" onClick = {handleFoodChange}>Food</button>
                    <button style = {btnStyle} className="btn btn-outline-primary" onClick = {handleHistoryChange}>History</button> 
                    <button style = {btnStyle} className="btn btn-outline-primary" onClick = {handleMoneyChange}>Money</button>
                    <button style = {btnStyle} className="btn btn-outline-primary" onClick = {handleMovieChange}>Movie</button>
                    <button style = {btnStyle} className="btn btn-outline-primary" onClick = {handleMusicChange}>Music</button>
                    <button style = {btnStyle} className="btn btn-outline-primary" onClick = {handlePoliticalChange}>Political</button> 
                    <button style = {btnStyle} className="btn btn-outline-primary" onClick = {handleReligionChange}>Religion</button>
                    <button style = {btnStyle} className="btn btn-outline-primary" onClick = {handleScienceChange}>Science</button>
                    <button style = {btnStyle} className="btn btn-outline-primary" onClick = {handleSportChange}>Sport</button>
                    <button style = {btnStyle} className="btn btn-outline-primary" onClick = {handleTravelChange}>Travel</button>
                </div>
            </div>
            <div style = {messageStyle} className = "col-md-6">
                <div>
                    <h4>Selected Category: {cap?cap:"Random"}</h4>
                </div>
                <div>
                    <Message category = {category}/>
                </div>
            </div>
        </div>
    )
}
export default Buttons