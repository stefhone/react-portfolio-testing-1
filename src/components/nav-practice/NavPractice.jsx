import './navPractice.css';
import { Link } from "react-router-dom";
import {IoIosArrowRoundBack} from 'react-icons/io'
import {RiHome2Line} from 'react-icons/ri'


const NavPractice = () => {

  return (
    <div className='nav-secondary-container'>
      <div className="container">    
        <Link to="/practice" className="btn-back">
          <IoIosArrowRoundBack/> <span>Practice Home</span> <RiHome2Line/>
        </Link>
      </div>
    </div>
  )
}

export default NavPractice