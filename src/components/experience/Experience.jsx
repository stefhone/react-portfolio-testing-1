import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>WordPress</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>WooCommerce</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>HTML Email</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
        {/* END EXPERIENCE__FRONTEND */}

        <div className="experience__other">
          <h3>Other</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Baking</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Cooking</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Cycling</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Brazilian Jiu-Jitsu</h4>
              <small className="text-light">Beginner</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Electronic Music Producer</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Piano</h4>
              <small className="text-light">Beginner</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience