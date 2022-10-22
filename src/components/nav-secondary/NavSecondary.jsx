import './navSecondary.css';
import { Link } from "react-router-dom";
import {IoIosArrowRoundBack} from 'react-icons/io'
import {RiHome2Line} from 'react-icons/ri'


const NavSecondary = () => {

  return (
    <div className='nav-secondary-container'>
      <div className="container">    
        <Link to="/react-portfolio-testing-1" className="btn-back">
            <IoIosArrowRoundBack/> <span>Home</span> <RiHome2Line/>
        </Link>
      </div>
    </div>
  )
}

export default NavSecondary