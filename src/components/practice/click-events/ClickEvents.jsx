import { useParams } from "react-router-dom"
import NavPractice from "../../nav-practice/NavPractice"

const ClickEvents = (params) => {

    return (
        <>
            <NavPractice />
            
            <section id="click-events" className="blog">
                <h1>Practice Click Events</h1>

                <div className="container">
                    <div className="content">
                        <h3>Frontend Development</h3>
                        <article className="">

                        
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ClickEvents