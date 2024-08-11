import Spacebar from "../IMG/images.jpeg"
import "../styles/HowToPlay.css"

function HowToPlay(){
    return(
        <section className="howtoplay_section">
            <article className="howtoplay_article">
                <h2 className ="howtoplay_title">
                    How to play:
                </h2>
                <div className="howtoplay_div_img">
                    <img src={Spacebar} className="howtoplay_img"/>
                </div>
                <p className="howtoplay_p">
                    pule pra caramba
                </p>
            </article>
        </section>
    )
}
export default HowToPlay;