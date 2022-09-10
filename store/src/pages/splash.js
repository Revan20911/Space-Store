import react from "react"
import "../styles/main.css"
import Header from "../components/header"



const Splash = () => {
    return(

        <>
        <Header/>
        <main id="splash">
            <div className="message-container">
            <h1 className="splash-message">Welcome</h1>
            </div>
            
        </main>
        </>
    )
}

export default Splash;