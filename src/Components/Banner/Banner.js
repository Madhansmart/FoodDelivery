import React , { Component } from 'react';
import './Banner.css';
import MAINIMG from '../../assets/img/main.jpg';
import pageImg1 from '../../assets/img/page-img.jpg';
import pageImg2 from '../../assets/img/page-img-1.jpg';
import pageImg3 from '../../assets/img/page-img-2.jpg';
import pageImg4 from '../../assets/img/page-img-3.jpg';
class Banner extends Component{
  constructor(){
    super()
    this.state = {
       banContentList : [{imgSrc : pageImg2,
                          text : "Sint occaecat cupidatat non proident"},
                          {imgSrc :pageImg3 ,
                          text : "Occaecat cupidatat non proident"},
                          {imgSrc : pageImg4,
                          text : "Lorem set sint occaecat cupid-atat non proident"}]
    }
  }
  banContent = (imgSrc, text) => {
    return(
        <div className="col-md-2 margin ban">
           <img src={imgSrc} alt="img" className="img-thumbnail img-fluid"/>
           <hr />
           <div className="ban-text">
              <h5>{text}}</h5>
              <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
           </div>
           <div className="row">
                <div className="col-md-6 col-6 col-sm-6">
                  <h2><red>$</red>2<span>5</span><sup>.8<sub>9</sub></sup></h2>
                </div>
                <div className="col-md-6 col-6 col-sm-6">
                    <div className="btn ban-btn">
                        ORDER NOW!
                    </div>
                </div>
           </div>
        </div>
    )
  }
  render(){
    return(
      <div className="Banner">
           <div className="banner-head">
              <img src={MAINIMG} alt = "img" className="img-fluid banner-head-img img-thumbnail"/>
           </div>
         <div className="banner-content-one">
            <div className="row mx-auto">
                <div className="col-md-3 banner-content-one-box banner-content-one-box-one">
                   <div className="banner-content-one-box-text banner-one">
                      <h1>Gift</h1>
                      <p>CERTIFICATES</p>
                      <h5>Purchase a gift which can be presented at any of our locations.</h5>
                   </div>
                   <div className="btn banner-content-one-btn">
                       ORDER NOW
                   </div>
                </div>
                <div className="col-md-3 banner-content-one-box banner-content-one-box-two">
                    <div className="banner-content-one-box-text banner-two">
                       <h2>Lunch</h2>
                       <p>SPECIAL</p>
                       <h5>Choose your favourite dish and we'll deliver it right to your door!</h5>
                    </div>
                    <div className="btn banner-content-one-btn">
                        ORDER NOW
                    </div>
                </div>
                <div className="col-md-3 banner-content-one-box banner-content-one-box-three">
                    <div className="banner-content-one-box-text banner-three">
                       <h2>Catering</h2>
                       <h5>With years of catering experience, Food Delivery will not disappoint!</h5>
                    </div>
                    <div className="btn banner-content-one-btn">
                        READ MORE
                    </div>
                </div>
            </div>
         </div>
           <div className="banner-content-two">
           <h1 className="text-center">FEATURED <red>PRODUCTS</red></h1><br />
              <div className="row">
                  <div className="col-md-2 offset-md-2 ban">
                     <img src={pageImg1} alt="img" className="img-thumbnail img-fluid"/>
                     <hr />
                     <div className="ban-text">
                        <h5>Excepteur sint occaecat cupid-atat non proident</h5>
                        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                     </div>
                     <div className="row">
                          <div className="col-md-6 col-6 col-sm-6">
                            <h2><red>$</red>2<span>5</span><sup>.8<sub>9</sub></sup></h2>
                          </div>
                          <div className="col-md-6 col-6 col-sm-6">
                              <div className="btn ban-btn">
                                  ORDER NOW!
                              </div>
                          </div>
                     </div>
                  </div>
                    {this.state.banContentList.map((name, index) => {
                      return(
                        this.banContent(name.imgSrc, name.text, index)
                      )
                    })}
              </div>
              <br />
              <hr />
              <br />
           </div>
      </div>
    )
  }
}

export default Banner;
