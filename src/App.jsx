import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import Home from "./routes/Home";    

function App() {
    return (
        <>
        <NavBar/>
        <main>
            <Outlet/>      
        </main>
        <Footer/> 
        </>
    )
}

export default App;
 