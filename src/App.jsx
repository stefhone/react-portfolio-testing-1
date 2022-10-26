import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Practice from './components/practice/Practice'
import PracticeItem from './components/practice/practice-item/PracticeItem'
import NotFound from './components/not-found/NotFound';


const App = () => {

  return (
    <>
        <Routes>
          <Route path='/react-portfolio-testing-1' element={
            <>
              <Header />
              <Nav />
              <About />
              <Experience />
              <Services />
              <Portfolio />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          }/>
          <Route path="/practice">
            <Route index element={<Practice />} />
            <Route path=":id" element={<PracticeItem />} />
          </Route>
          {/* <Route path='/practice/*' element={<Practice />}/> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App