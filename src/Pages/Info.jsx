import React from 'react'

function Info() {
  return (
    <div>
         {/*  header  */}  
    <header id="site-header"  className="fixed-top">
        <div  className="container">
            <nav  className="navbar navbar-expand-lg navbar-light">
                <a  className="navbar-brand" href="index.html">
                    Dress<span>-Up</span>
                </a>
                <button  className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span  className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span  className="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>
                <div  className="collapse navbar-collapse" id="navbarScroll">
                    <ul  className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li  className="nav-item">
                            <a  className="nav-link" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li  className="nav-item">
                            <a  className="nav-link active" href="about.html">About</a>
                        </li>
                        <li  className="nav-item">
                            <a  className="nav-link" href="services.html">Services</a>
                        </li>
                        <li  className="nav-item">
                            <a  className="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                    <form action="#error" method="GET"  className="d-flex search-header">
                        <input  className="form-control" type="search" placeholder="Enter Keyword..." aria-label="Search"
                            required/>
                        <button  className="btn btn-style" type="submit"><i  className="fas fa-search"></i></button>
                    </form>
                </div>
                 {/*  toggle switch for light and dark theme  */}  
                <div  className="cont-ser-position">
                    <nav  className="navigation">
                        <div  className="theme-switch-wrapper">
                            <label  className="theme-switch" for="checkbox">
                                <input type="checkbox" id="checkbox"/>
                                <div  className="mode-container">
                                    <i  className="gg-sun"></i>
                                    <i  className="gg-moon"></i>
                                </div>
                            </label>
                        </div>
                    </nav>
                </div>
                 {/*  //toggle switch for light and dark theme  */}  
            </nav>
        </div>
    </header>
     {/*  //header  */}  


      {/*  inner banner  */}  
    <section  className="inner-banner py-5">
        <div  className="w3l-breadcrumb py-lg-5">
            <div  className="container pt-4 pb-sm-4">
                <h4  className="inner-text-title font-weight-bold pt-sm-5 pt-4">About Us</h4>
                <ul  className="breadcrumbs-custom-path">
                    <li><a href="index.html">Home</a></li>
                    <li  className="active"><i  className="fas fa-angle-right mx-2"></i>About</li>
                </ul>
            </div>
        </div>
    </section>
     {/*  //inner banner  */}  

     {/*  about block  */}  
    <section  className="w3l-about py-5" id="about">
        <div  className="container py-lg-5 py-md-4 py-2">
            <div  className="row align-items-center">
                <div  className="col-lg-6 section-width pe-xl-5">
                    <h3  className="title-style">25 <span>years</span> of experience</h3>
                    <p  className="mt-4">At corrupti odit At iure facere,
                        porro repellat officia quas, dolores magnam assumenda soluta odit
                        harum maiores fugiat accusamus eos nulla. Iure voluptatibus explicabo
                        officia.</p>
                    <p  className="mt-4 pb-dm-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, corrupti
                        odit? At iure facere,
                        porro repellat officia quas, dolores magnam assumenda soluta odit
                        harum.</p>
                    <a href="about.html"  className="btn btn-style mt-4"> Know more about us</a>
                </div>
                <div  className="col-lg-6 history-info mt-lg-0 mt-5 pt-md-4 pt-2">
                    <div  className="position-relative img-border">
                        <img src="assets/images/blog4.jpg"  className="img-fluid video-popup-image" alt="video-popup"/>

                        <a href="#small-dialog"  className="popup-with-zoom-anim play-view text-center position-absolute">
                            <span  className="video-play-icon">
                                <span  className="fa fa-play"></span>
                            </span>
                        </a>

                         {/*  dialog itself, mfp-hide  className is required to make dialog hidden  */}  
                        <div id="small-dialog"  className="zoom-anim-dialog mfp-hide">
                            <iframe src="https://player.vimeo.com/video/333569091?h=9836ac4d97"
                                allowfullscreen title="Info"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     {/*  //about block  */}  
 
      {/*  team block  */}  
    <section  className="w3l-team-61 py-5" id="team">
        <div  className="container py-lg-5 py-md-4 py-2">
            <h3  className="title-style mb-lg-5 mb-4 text-center"><span>Our</span> Tailors</h3>
            <div  className="team-right-content row text-center justify-content-center">
                <div  className="col-lg-3 col-sm-6">
                    <div  className="teams-gd">
                        <div  className="team-member">
                            <div  className="team-img">
                                <a href="#team"><img  className="img-fluid img-responsive" 
                                src="assets/images/team1.jpg"
                                        alt=""/></a>
                            </div>
                            <div  className="team-hover">
                                <div  className="desk">
                                    <h4><a href="#team">Meet Me</a></h4>
                                    <p>Lorem ipsum dolor sit amet,Ea consequuntur </p>
                                </div>
                                <div  className="s-link">
                                    <a href="#facebook"><span  className="fab fa-facebook-f"></span></a>
                                    <a href="#twitter"><span  className="fab fa-twitter"></span></a>
                                    <a href="#google-plus"><span  className="fab fa-google-plus-g"></span></a>
                                </div>
                            </div>
                        </div>
                        <div  className="team-title p-4">
                            <h5><a href="#team">Martin Ker</a></h5>
                            <span>Tailor</span>
                        </div>
                    </div>
                </div>
                <div  className="col-lg-3 col-sm-6 mt-sm-0 mt-4">
                    <div  className="teams-gd">
                        <div  className="team-member">
                            <div  className="team-img">
                                <a href="#team"><img  className="img-fluid img-responsive" src="assets/images/team2.jpg"
                                        alt=""/></a>
                            </div>
                            <div  className="team-hover">
                                <div  className="desk">
                                    <h4><a href="#team">Meet Me</a></h4>
                                    <p>Lorem ipsum dolor sit amet,Ea consequuntur </p>
                                </div>
                                <div  className="s-link">
                                    <a href="#facebook"><span  className="fab fa-facebook-f"></span></a>
                                    <a href="#twitter"><span  className="fab fa-twitter"></span></a>
                                    <a href="#google-plus"><span  className="fab fa-google-plus-g"></span></a>
                                </div>
                            </div>
                        </div>
                        <div  className="team-title p-4">
                            <h5><a href="#team">Shona Leer</a></h5>
                            <span>Master Tailor</span>
                        </div>
                    </div>
                </div>
                <div  className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                    <div  className="teams-gd">
                        <div  className="team-member">
                            <div  className="team-img">
                                <a href="#team"><img  className="img-fluid img-responsive" src="assets/images/team3.jpg"
                                        alt=""/></a>
                            </div>
                            <div  className="team-hover">
                                <div  className="desk">
                                    <h4><a href="#team">Meet Me</a></h4>
                                    <p>Lorem ipsum dolor sit amet,Ea consequuntur </p>
                                </div>
                                <div  className="s-link">
                                    <a href="#facebook"><span  className="fab fa-facebook-f"></span></a>
                                    <a href="#twitter"><span  className="fab fa-twitter"></span></a>
                                    <a href="#google-plus"><span  className="fab fa-google-plus-g"></span></a>
                                </div>
                            </div>
                        </div>
                        <div  className="team-title p-4">
                            <h5><a href="#team">Brock Lee</a></h5>
                            <span>Tailor</span>
                        </div>
                    </div>
                </div>
                <div  className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                    <div  className="teams-gd">
                        <div  className="team-member">
                            <div  className="team-img">
                                <a href="#team"><img  className="img-fluid img-responsive" src="assets/images/team4.jpg"
                                        alt=""/></a>
                            </div>
                            <div  className="team-hover">
                                <div  className="desk">
                                    <h4><a href="#team">Meet Me</a></h4>
                                    <p>Lorem ipsum dolor sit amet,Ea consequuntur </p>
                                </div>
                                <div  className="s-link">
                                    <a href="#facebook"><span  className="fab fa-facebook-f"></span></a>
                                    <a href="#twitter"><span  className="fab fa-twitter"></span></a>
                                    <a href="#google-plus"><span  className="fab fa-google-plus-g"></span></a>
                                </div>
                            </div>
                        </div>
                        <div  className="team-title p-4">
                            <h5><a href="#team">Maya Didas</a></h5>
                            <span>Master Tailor</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     {/*  //team block  */}  

     {/*  about page service grids  */}  
    <section  className="home-services about-service-bg py-5" id="services">
        <div  className="container py-lg-5 py-md-4 py-2">
            <h3  className="title-style text-center mb-lg-5 mb-4">What <span>we do</span> for our <span>Clients?</span></h3>
            <div   className="row justify-content-center">
                <div   className="col-lg-4 col-md-6">
                    <div  className="box-wrap">
                        <div  className="icon">
                            <i  className="fas fa-user-tie"></i>
                        </div>
                        <h4  className="number">01</h4>
                        <h4><a href="#url">Unique Design</a></h4>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                            doloret quas saepe autem, dolor set.</p>
                        <a href="services.html"  className="read">Read more</a>
                    </div>
                </div>
                <div  className="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div  className="box-wrap">
                        <div  className="icon">
                            <i  className="fas fa-cut"></i>
                        </div>
                        <h4  className="number">02</h4>
                        <h4><a href="#url">Custom Tailoring</a></h4>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                            doloret quas saepe autem, dolor set.</p>
                        <a href="services.html"  className="read">Read more</a>
                    </div>
                </div>
                <div  className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div  className="box-wrap">
                        <div  className="icon">
                            <i  className="fas fa-person-booth"></i>
                        </div>
                        <h4  className="number">03</h4>
                        <h4><a href="#url">Wedding Services</a></h4>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                            doloret quas saepe autem, dolor set.</p>
                        <a href="services.html"  className="read">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
     {/*  //about page service grids  */}  

      {/*  content block  */}  
    <section  className="w3l-content1 py-5">
        <div  className="container py-md-5 py-sm-4 py-2">
            <div  className="row align-items-center py-4">
                <div  className="col-lg-7">
                    <div  className="bottom-info">
                        <h3  className="title-style text-white">Your <span>Design</span>, We <span>deliver</span></h3>
                        <p  className="mt-4 text-light">Lorem ipsum dolor sit amet elit. Velit beatae
                            rem ullam dolore nisi esse quasi. Integer sit amet. Lorem ipsum dolor sit
                            amet elit.</p>
                    </div>
                </div>
                <div  className="col-lg-5 text-lg-end">
                    <a href="contact.html"  className="btn btn-style mt-lg-0 mt-md-5 mt-4">Book your appointment</a>
                </div>
            </div>
        </div>
    </section>
     {/*  //content block  */}  

     {/*  testimonials block  */}  
    <section  className="w3l-customer-block py-5">
        <div  className="container py-lg-5 py-md-4 py-2">
            <h3  className="title-style text-center mb-lg-5 mb-4"><span>Our</span> Testimonials</h3>
            <div  className="row">
                <div  className="col-md-4">
                    <div  className="customer-single pe-lg-4">
                        <blockquote>Lorem ipsum dolor sit amet, consectetur adip iscing elit sed. orci urna. In et augue
                            ornare, tempor
                            massa
                            in,
                            luctus sapien. Proin a diam et dui fermentum dolor molestie vel id neque euismod massa a
                            quam viverra
                            et.
                        </blockquote>
                        <div  className="customer-img d-flex align-items-center mt-4">
                            <img src="assets/images/testi1.jpg"  className="img-fluid me-3" alt="" />
                            <div  className="customer-info">
                                <h6>Theo Hall</h6>
                                <small  className="mb-0">Subtitle goes here</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="col-md-4 mt-md-0 mt-5">
                    <div  className="customer-single pe-lg-4">
                        <blockquote>Lorem ipsum dolor sit amet, consectetur adip iscing elit sed. orci urna. In et augue
                            ornare, tempor
                            massa
                            in,
                            luctus sapien. Proin a diam et dui fermentum dolor molestie vel id neque euismod massa a
                            quam viverra
                            et.
                        </blockquote>
                        <div  className="customer-img d-flex align-items-center mt-4">
                            <img src="assets/images/testi2.jpg"  className="img-fluid me-3" alt="" />
                            <div  className="customer-info">
                                <h6>Jenna John</h6>
                                <small  className="mb-0">Subtitle goes here</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="col-md-4 mt-md-0 mt-5">
                    <div  className="customer-single pe-lg-4">
                        <blockquote>Lorem ipsum dolor sit amet, consectetur adip iscing elit sed. orci urna. In et augue
                            ornare, tempor
                            massa
                            in,
                            luctus sapien. Proin a diam et dui fermentum dolor molestie vel id neque euismod massa a
                            quam viverra
                            et.
                        </blockquote>
                        <div  className="customer-img d-flex align-items-center mt-4">
                            <img src="assets/images/testi3.jpg"  className="img-fluid me-3" alt="" />
                            <div  className="customer-info">
                                <h6>William Due</h6>
                                <small  className="mb-0">Subtitle goes here</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     {/*  //testimonials block  */}  

      {/*  footer  */} 
    <footer  className="w3l-footer-16 py-5">
        <div  className="container pt-md-5 pt-sm-4 pb-sm-2">
            <div  className="row">
                <div  className="col-lg-4">
                    <a  className="footer-logo d-flex align-items-center" href="index.html">
                        Dress<span>-Up</span></a>
                    <p  className="mt-3">Nam libero tempore, cum soluta nobis est elige endi optio cumque nihil impedit quo
                        minus id quod maxime placeat facere. Istee natuser iumedolo
                        ladase.</p>
                    <div  className="columns-2 mt-4">
                        <ul  className="social">
                            <li><a href="#facebook"><i  className="fab fa-facebook-f"></i></a>
                            </li>
                            <li><a href="#linkedin"><i  className="fab fa-linkedin-in"></i></a>
                            </li>
                            <li><a href="#twitter"><i  className="fab fa-twitter"></i></a>
                            </li>
                            <li><a href="#google"><i  className="fab fa-google-plus-g"></i></a>
                            </li>
                            <li><a href="#github"><i  className="fab fa-github"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div  className="col-lg-5 mt-lg-0 mt-5">
                    <div  className="row">
                        <div  className="col-xl-5 col-6 column">
                            <h3  className="">Quick Link</h3>
                            <ul  className="footer-gd-16">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="#blog">Blog Posts</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div  className="col-xl-5 col-6 column px-xxl-0">
                            <h3  className="">Contact Info</h3>
                            <ul  className="footer-contact-list">
                                <li  className="">10001, 5th Avenue,
                                    #32841 block, USA</li>
                                <li  className="mt-2"><a href="tel:+12 23456790">+1223 456 790</a></li>
                                <li  className="mt-2"><a href="mailto:info@example.com">info@example.com</a></li>
                                <li  className="mt-2"><a href="mailto:info@example.com">www.example.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div  className="col-lg-3 col-md-7 col-8 column mt-lg-0 mt-4">
                    <h3  className="">Opening Hours</h3>
                    <ul  className="list-footer-block">
                        <li>
                            Monday
                            <span>9:00 - 18:00</span>
                        </li>
                        <li>
                            tuesday
                            <span>10:00 - 19:00</span>
                        </li>
                        <li>
                            Wednesday
                            <span>8:00 - 17:00</span>
                        </li>
                        <li>
                            Thursday
                            <span>10:00 - 19:00</span>
                        </li>
                        <li>
                            Friday
                            <span>10:00 - 19:00</span>
                        </li>
                        <li>
                            Saturday
                            <span>10:00 - 19:00</span>
                        </li>
                        <li>
                            Sunday
                            <span>closed</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div  className="below-section text-center pt-4 mt-5">
                <p  className="copy-text">&copy; 2021 Dress-Up. All rights reserved. Design by <a
                        href="https://w3layouts.com/" target="_blank" rel="noreferrer"> W3Layouts</a>
                </p>
            </div>
        </div>
    </footer>
     {/*  //footer  */} 



    </div>
  )
}

export default Info