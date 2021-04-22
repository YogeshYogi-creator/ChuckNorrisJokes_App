import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Buttons from './Buttons'
const App = () => {

//style//
  const style = {
    textAlign: "center",
    marginBottom: "30px"
  }
//style//

  return(
    <div className = "container">
        <div style = {style}>
          <h2 className = "display-4">Chuck Norries</h2>
        </div>
      <Buttons/>
    </div>
  )
}
export default App