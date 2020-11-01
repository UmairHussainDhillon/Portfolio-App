import React, { Component } from 'react';
import profilepic from '../img/umair.jpg';
import {
    Link
} from "react-router-dom";
import Social from './Social';
//import Navitem from './Navitem';
// We'll code Navitem.js later for now let's focus on Navbar.js
// “Navitem” is the sub-component.
class Navbar extends Component {
   
    render() {
        return (
       <div>
  <div className="vertical-nav" id="sidebar">
    <div className="py-4 px-3 mb-4 ">
      <div className="media d-flex align-items-center"><img src={profilepic} alt="..." width={60} className="mr-3 rounded-circle img-thumbnail shadow-sm" />
        <div className="media-body">
          <h4 className="m-0">Umair Hussain</h4>
          <p className="font-weight-light text-muted mb-0">Software Engineer</p>
        </div>
      </div>
    </div>
    <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Main</p>
    <ul className="nav flex-column  mb-0">
      <li className="nav-item">
        <a href="/#home" className="nav-link text-dark font-italic bg-light">
          <i className="fa fa-th-large mr-3 text-primary fa-fw" />
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="/about" className="nav-link text-dark font-italic">
          <i className="fa fa-address-card mr-3 text-primary fa-fw" />
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="/skills" className="nav-link text-dark font-italic">
          <i className="fa fa-cubes mr-3 text-primary fa-fw" />
          Services
        </a>
      </li>
      <li className="nav-item">
        <a href="/contact" className="nav-link text-dark font-italic">
          <i className="fa fa-picture-o mr-3 text-primary fa-fw" />
          Contact
        </a>
      </li>
    </ul>
   </div>
  {/* End vertical navbar */}
  {/* Page content holder */}
</div>


         /*  /*  <nav>
                            <img src={profilepic} alt="Umair-Hussain-Profile" className="profilepic"></img>
                            <h3 style={{color:"white"}}><strong>Umair Hussain</strong></h3>
<Social/>
            <ul>
            <Link to="/#Home" >Home</Link>
            <Link to="/about" >About</Link>
            <Navitem item="Home" link="/"  icon="fab fa-linkedin-in"></Navitem>
            <Navitem item="About" link="/about" ></Navitem>
            <Navitem item="Resume" link="/education"></Navitem>
            <Navitem item="Portfolio" link="/skills"></Navitem>
         
           <Navitem item="Services" link="/contact"></Navitem>
           <Navitem item="Contact" link="/contact"></Navitem>

            </ul>
            </nav>*/ 
            
            )
        }
    }
   
export default Navbar;