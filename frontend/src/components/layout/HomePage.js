import '../css/HomePage.css'

import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

const HomePage = () => {
    
    return (
        <div>
        
        <div className="text1">Choose <b>as you want</b> <br></br>
            Pay <b> as you can</b>
        </div>

        <div className="row">
            <div className="col" >
                <button className="btn btn-dark" style={{marginLeft: "100px"}}>
                <Link to="./home">
                <span className="tombol" >Shop Now</span>
                </Link>
                </button>
            </div>

            <div className="col">
                <div className="text"><b>New Concept</b> of Online Shopping</div>
            </div>
        </div>
        <div className="row">
            <div className="col">

            </div>

            <div className="col">
                <div className="text2">
                    Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go here.
                </div>
            </div>
        </div>
    </div>

    )
    
}

export {HomePage}