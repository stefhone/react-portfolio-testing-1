import { useParams } from "react-router-dom"
import NavPractice from "../../nav-practice/NavPractice"
import * as Constants from "../../../utility/constants/practice"
import useFetch from "../../../hooks/useFetch"

const PracticeItem = (params) => {
    const { id } = useParams()
    const { data, isLoading, error } = useFetch('http://localhost:8000/practice/' + id)

    return (
        <>
            <NavPractice />
            
            <section id="click-events" className="blog">
                {/* {
                    Constants.data.map(({id, image, title, open, demo}) => {
                        return(
                        <article key={id} className="blog-listing__item">
                          <div className="blog-listing__item-image">
                              <img src={image} alt={title} />
                          </div>

                          <h3>{title}</h3>

                        </article>
                        )
                    })
                } */}
                {/* <h1>Practice {title} Click Events</h1>

                <div className="container">
                    <div className="content">
                        <h3>Frontend Development</h3>
                        <article className="">

                        
                        </article>
                    </div>
                </div> */}

                {/* {Constants.data.filter(id => id.title === id).map((id, index) => ( */}
                <div className="container">
                    <div className="content">
                        { isLoading && <div>Loading...</div> }
                        { error && <div>{ error }</div> }
                        { data && (
                            <>
                                <h3>{ id }</h3>
                                <article className="">
                                    <img src={process.env.PUBLIC_URL + data.image} alt={data.title}/>
                                    <h2>{data.title}</h2>
                                </article>
                            </>
                        )}
                    </div>
                </div>  
                {/* ))} */}

            </section>
        </>
    )
}

export default PracticeItem