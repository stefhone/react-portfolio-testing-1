import { Link } from "react-router-dom";
import './practice.css'
import NavSecondary from "../nav-secondary/NavSecondary"
import * as Constants from "../../utility/constants/practice"
import PracticeItem from "./practice-item/PracticeItem";

const Practice = ({practice}) => {

    return (
      <>
        <NavSecondary />
        
        <section id="practice" className="blog-listing">
            <h1>REACT Practice Exercises</h1>
            
            <div className="container blog-listing__container">
                {
                    practice.map(({id, image, title, open, demo} ) => {
                        return(
                        <article key={id} className="blog-listing__item">
                          <div className="blog-listing__item-image">
                              {/* <img src={require(`${image}`)} alt={title} /> */}
                              <img src={image} alt={title} />
                          </div>

                          <h3>{title}</h3>

                          <div className="blog-listing__item-cta">
                            <Link to={open} className="btn">
                              Open
                            </Link>
                              <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
                          </div>
                        </article>
                        )
                    })
                }
            </div>
        </section>
      </>
    )
}

export default Practice