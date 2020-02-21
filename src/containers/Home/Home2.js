import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
    render(){
        return (
            <>
                <p>You are in : /bibliotheque</p>
                {/*<Link to={"/"}>GO TO HOME</Link>*/}
                <br/>
                {/*<Link to={"/iughrighrigrhigrh"}>GO TO RANDOM URL</Link>*/}
            </>
        )
    }
}

export default Home;