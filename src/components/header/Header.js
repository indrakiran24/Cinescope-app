import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
            <Link to="/"><img className="header_icon" src="https://static.wixstatic.com/media/496961_1cf3d03d41ca49eba46549436406927a~mv2.png/v1/fill/w_1191,h_842,al_c/496961_1cf3d03d41ca49eba46549436406927a~mv2.png" height={120}/></Link>
                <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header