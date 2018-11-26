import React , { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(){
     super()
     this.state = {
       navBarMenu : ["HOME", "ABOUT" , "MENU & SPECIALS" , "OUR GALLERY" , "PRICE LIST" , "ORDER NOW", "CONTACTS"]
     }
  }
  navBarList = (linkName, index) => {
      return(
        <li class="nav-item" key = {index} >
            <a class="nav-link" href="/#">{linkName}</a>
        </li>
      )
  }
  render(){
    return(
      <div className="Header container">
            <div className="header-text">
                <p className="header-text-para-1">Order Delivery</p>
                <p className="header-text-para-2"><red>+1 234 </red>567 8901</p>
            </div>
            <div className="header-head">
               <h1>FOOD</h1>
               <p>DELIVERY</p>
            </div>
            <nav class="navbar navbar-expand-md bg-custom navbar-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                      <ul class="navbar-nav mx-auto">
                          {this.state.navBarMenu.map((name, index) => {
                             return(
                                this.navBarList(name, index)
                             )
                          })}
                      </ul>
                </div>
              </nav>
      </div>
    )
  }
}

export default Header;
