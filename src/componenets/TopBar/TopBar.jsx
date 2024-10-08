import './topBar.css'
import { FaHome} from "react-icons/fa";
import { IoMdMail} from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
          <a href='intro' className='logo'><FaHome /> </a>
         <div className='items'>
         <div className="itemContainer">
            <FaSquarePhone className='icon'/>
            <span>+251-922-100-181</span>
            </div>
            <div className="itemContainer">
          <IoMdMail  className='icon'/>
            <span>Ashenafibirhanu33@gmail.com</span>
          </div>
         </div>
           
           </div>
          
          <div className="right">
            <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
             <span className='line1'></span>
             <span className='line2'></span>
             <span className='line3'></span>
            </div>
          </div>
          </div> 
    </div>
  )
}

export default TopBar
