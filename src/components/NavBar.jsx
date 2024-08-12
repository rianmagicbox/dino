import { Link } from 'react-router-dom';
import "../styles/NavBar.css"
function NavBar(){
    return(
        <nav>
            <div className="div_title">
                <h1 className="title"> dino game react</h1>
            </div>
            <hr/>
            <div className="div_options">
                <Link to="/"
                className="links">Home</Link>
                <Link to="/howtoplay"
                className="links">How To Play</Link>
                <Link to="/start"
                className="links">Start</Link>
            </div>
        </nav>
    );
}
export default NavBar;