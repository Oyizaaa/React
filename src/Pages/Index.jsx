import React from 'react'

function Index() {
  return (
    <div>
         {/* header */} 
    <header id="site-header"     className="fixed-top">
        <div     className="container">
            <nav     className="navbar navbar-expand-lg navbar-light">
                <a    className="navbar-brand" href="index.html">
                    Dress<span>-Up</span>
                </a>
                <button    className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span    className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span    className="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>
                <div    className="collapse navbar-collapse" id="navbarScroll">
                    <ul    className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li    className="nav-item">
                            <a     className="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li     className="nav-item">
                            <a     className="nav-link" href="about.html">About</a>
                        </li>
                        <li     className="nav-item">
                            <a     className="nav-link" href="services.html">Services</a>
                        </li>
                        <li     className="nav-item">
                            <a     className="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                    <form action="#error" method="GET"     className="d-flex search-header">
                        <input     className="form-control" type="search" placeholder="Enter Keyword..."
                         aria-label="Search"
                            required/>
                        <button     className="btn btn-style" type="submit"><i     className="fas fa-search"></i></button>
                    </form>
                </div>
                {/*  toggle switch for light and dark theme */} 
                <div     className="cont-ser-position">
                    <nav     className="navigation">
                        <div     className="theme-switch-wrapper">
                            <label     className="theme-switch" for="checkbox">
                                <input type="checkbox" id="checkbox"/>
                                <div     className="mode-container">
                                    <i     className="gg-sun"></i>
                                    <i     className="gg-moon"></i>
                                </div>
                            </label>
                        </div>
                    </nav>
                </div>
                {/*  //toggle switch for light and dark theme */} 
            </nav>
        </div>
    </header>
    {/*  //header */} 
 
     {/* hero slider Start */} 
    <div     className="banner-wrap">
        <div     className="banner-slider">
             {/* hero slide start */} 
            <div     className="banner-slide bg1">
                <div     className="container">
                    <div     className="hero-content">
                        <p data-animation="fadeInDown"     className="mb-2">Stitching </p>
                        <h1 data-animation="flipInX" data-delay="0.8s" data-color="#fff">
                            Your <span>New</span> Style </h1>
                        <div     className="cta-btn" data-animation="fadeInUp" data-delay="1s">
                            <a href="about.html"     className="btn btn-style btn-primary">View More</a>
                        </div>
                    </div>
                </div>
                <div     className="hero-overlay"></div>
            </div>
             {/* hero slide end */} 
             {/* hero slide start */} 
            <div     className="banner-slide bg2">
                <div     className="container">
                    <div     className="hero-content">
                        <p data-animation="fadeInDown"     className="mb-2">New Trends</p>
                        <h1 data-animation="fadeInDown" data-delay="0.8s" data-color="#fff">
                            Custom <span>made</span> Suits
                        </h1>
                        <div     className="cta-btn" data-animation="fadeInDown" data-delay="1s">
                            <a href="about.html"     className="btn btn-style btn-primary">View More</a>
                        </div>
                    </div>
                </div>
                <div     className="hero-overlay"></div>
            </div>
             {/* hero slide end */} 
             {/* hero slide start */} 
            <div     className="banner-slide bg3">
                <div     className="container">
                    <div     className="hero-content">
                        <p data-animation="fadeInUp"     className="mb-2">New Models</p>
                        <h1 data-animation="fadeInUp" data-color="#fff" data-delay="0.8s">
                            Embrace <span>your</span> Style
                        </h1>
                        <div     className="cta-btn" data-animation="fadeInDown" data-delay="1s">
                            <a href="about.html"     className="btn btn-style btn-primary">View More</a>
                        </div>
                    </div>
                </div>
                <div     className="hero-overlay"></div>
            </div>
             {/* hero slide end */} 
             {/* hero slide start */} 
            <div     className="banner-slide bg4">
                <div     className="container">
                    <div     className="hero-content">
                        <p data-animation="fadeInDown"     className="mb-2">Fashion Look</p>
                        <h1 data-animation="flipInX" data-color="#fff" data-delay="0.8s">
                            Styles <span>and</span> Trends
                        </h1>
                        <div     className="cta-btn" data-animation="fadeInUp" data-delay="1s">
                            <a href="about.html"     className="btn btn-style btn-primary">View More</a>
                        </div>
                    </div>
                </div>
                <div     className="hero-overlay"></div>
            </div>
             {/* hero slide end */} 
        </div>
    </div>
     {/* hero slider end */} 

      {/* home services block  */}
    <div     className="w3l-servicesblock2 py-5" id="services">
        <div     className="container py-lg-5 py-md-4 py-2">
            <h3     className="title-style text-center mb-lg-5 mb-4">Services we're <span>offering</span></h3>
            <div     className="row">
                <div     className="col-lg-3 col-sm-6">
                    <div     className="grids5-info">
                        <a href="services.html"     className="blog-image d-block zoom"><img src="assets/images/s1.jpg" alt=""
                                    className="img-fluid radius-image" />
                            <div     className="image-overlay">
                                <h4>Measurements</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.</p>
                            </div>
                            <div     className="iconic-plus">
                                <i     className="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div     className="col-lg-3 col-sm-6 mt-sm-0 mt-4">
                    <div     className="grids5-info">
                        <a href="services.html"     className="blog-image d-block zoom"><img src="assets/images/s2.jpg" alt=""
                                    className="img-fluid radius-image" />
                            <div     className="image-overlay">
                                <h4>Repair</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.</p>
                            </div>
                            <div     className="iconic-plus">
                                <i     className="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div     className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                    <div     className="grids5-info">
                        <a href="services.html"     className="blog-image d-block zoom"><img src="assets/images/s3.jpg" alt=""
                                    className="img-fluid radius-image" />
                            <div     className="image-overlay">
                                <h4>Сutting-out</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.</p>
                            </div>
                            <div     className="iconic-plus">
                                <i     className="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div     className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                    <div     className="grids5-info">
                        <a href="services.html"     className="blog-image d-block zoom"><img src="assets/images/s4.jpg" alt=""
                                    className="img-fluid radius-image" />
                            <div     className="image-overlay">
                                <h4>Resize</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.</p>
                            </div>
                            <div     className="iconic-plus">
                                <i     className="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div     className="text-center mt-md-5 mt-5 pt-lg-4">
                <a href="services.html"     className="btn btn-style">View More Services</a>
            </div>
        </div>
    </div>
     {/* //home services block  */}

      {/* home page service grids  */}
    <section     className="home-services py-5" id="services">
        <div     className="container py-lg-5 py-md-4 py-2">
            <h3     className="title-style text-center mb-lg-5 mb-4">What <span>we do</span> for our <span>Clients?</span></h3>
            <div     className="row justify-content-center">
                <div   zNameName="col-lg-4 col-md-6">
                    <div    className="box-wrap">
                        <div    className="icon">
                            <i    className="fas fa-user-tie"></i>
                        </div>
                        <h4    className="number">01</h4>
                        <h4><a href="#url">Unique Design</a></h4>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                            doloret quas saepe autem, dolor set.</p>
                        <a href="services.html"    className="read">Read more</a>
                    </div>
                </div>
                <div    className="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div    className="box-wrap">
                        <div    className="icon">
                            <i    className="fas fa-cut"></i>
                        </div>
                        <h4    className="number">02</h4>
                        <h4><a href="#url">Custom Tailoring</a></h4>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                            doloret quas saepe autem, dolor set.</p>
                        <a href="services.html"    className="read">Read more</a>
                    </div>
                </div>
                <div    className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div    className="box-wrap">
                        <div    className="icon">
                            <i    className="fas fa-person-booth"></i>
                        </div>
                        <h4    className="number">03</h4>
                        <h4><a href="#url">Wedding Services</a></h4>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                            doloret quas saepe autem, dolor set.</p>
                        <a href="services.html"    className="read">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
     {/* //home page service grids  */}

     {/* about block  */}
    <section    className="w3l-about py-5" id="about">
        <div    className="container py-lg-5 py-md-4 py-2">
            <div    className="row align-items-center">
                <div    className="col-lg-6 section-width pe-xl-5">
                    <h3    className="title-style">25 <span>years</span> of experience</h3>
                    <p    className="mt-4">At corrupti odit At iure facere,
                        porro repellat officia quas, dolores magnam assumenda soluta odit
                        harum maiores fugiat accusamus eos nulla. Iure voluptatibus explicabo
                        officia.</p>
                    <p    className="mt-4 pb-dm-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, corrupti
                        odit? At iure facere,
                        porro repellat officia quas, dolores magnam assumenda soluta odit
                        harum.</p>
                    <a href="about.html"    className="btn btn-style mt-4"> Know more about us</a>
                </div>
                <div    className="col-lg-6 history-info mt-lg-0 mt-5 pt-md-4 pt-2">
                    <div    className="position-relative img-border">
                        <img src="assets/images/about.jpg"    className="img-fluid video-popup-image" alt="video-popup"/>

                        <a href="#small-dialog"    className="popup-with-zoom-anim play-view text-center position-absolute">
                            <span    className="video-play-icon">
                                <span    className="fa fa-play"></span>
                            </span>
                        </a>

                         {/* dialog itself, mfp-hide    className is required to make dialog hidden  */}
                        <div id="small-dialog"    className="zoom-anim-dialog mfp-hide">
                            <iframe src="https://player.vimeo.com/video/333569091?h=9836ac4d97" title='video play'
                                allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     {/* //about block  */}
   
      {/* content block  */} 
    <section    className="w3l-content1 py-5">
        <div    className="container py-md-5 py-sm-4 py-2">
            <div    className="row align-items-center py-4">
                <div    className="col-lg-7">
                    <div    className="bottom-info">
                        <h3    className="title-style text-white">Your <span>Design</span>, We <span>deliver</span></h3>
                        <p    className="mt-4 text-light">Lorem ipsum dolor sit amet elit. Velit beatae
                            rem ullam dolore nisi esse quasi. Integer sit amet. Lorem ipsum dolor sit
                            amet elit.</p>
                    </div>
                </div>
                <div    className="col-lg-5 text-lg-end">
                    <a href="contact.html"    className="btn btn-style mt-lg-0 mt-md-5 mt-4">Book your appointment</a>
                </div>
            </div>
        </div>
    </section>
     {/* //content block  */} 

     {/* works block  */} 
    <section    className="w3l-how-grids-3" id="how">
        <div    className="container-fluid">
            <div    className="row d-grid grid-col-2 grid-element-9 px-lg-0">
                <div    className="left-texthny p-lg-5 py-4">
                    <div    className="left-texthny-2 p-lg-5 p-4">
                        <h3    className="title-style"><span>Our</span> Works</h3>
                        <p    className="my-3 pr-lg-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                            hic odio consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae
                            laudantium rem ullam dolore nisi. Integer sit amet mattis quam.</p>
                        <a href="about.html"    className="btn btn-style btn-secondary mt-4">Read More</a>
                    </div>
                </div>
                <div    className="left-grid-ele-9 grid-bg1">
                </div>
            </div>
            <div    className="row d-grid grid-col-3 grid-element-9 px-lg-0">
                <div    className="left-grid-ele-9 grid-bg2">

                </div>
                <div    className="left-texthny-3 p-lg-5 py-4 d-grid align-items-center">
                    <div    className="sub-wid-grid-9 py-lg-0 py-5">
                        <i    className="fas fa-child mb-4"></i>
                        <h4    className="text-grid-9"><a href="services.html">Our Designs</a></h4>
                        <p    className="sub-para">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

                    </div>
                </div>
                <div    className="left-grid-ele-9 grid-bg3">

                </div>
                <div    className="left-texthny-3 p-lg-5 py-4 d-grid align-items-center">
                    <div    className="sub-wid-grid-9 py-lg-0 py-5">
                        <i    className="fab fa-angellist mb-4"></i>
                        <h4    className="text-grid-9"><a href="services.html">New Styles</a></h4>
                        <p    className="sub-para">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
     {/* //works block  */} 

     {/* blog section  */} 
    <div    className="w3l-news py-5" id="homeblog">
        <div    className="container py-lg-5 py-md-4 py-2">
            <h3    className="title-style text-center mb-lg-5 mb-4"><span>Our</span> Blog Posts</h3>
            <div    className="row justify-content-center">
                <div    className="col-lg-4 col-md-6">
                    <div    className="grids5-info">
                        <a href="#blog"    className="blog-image d-block zoom"><img src="assets/images/blog1.jpg"
                                alt=""    className="img-fluid news-image" />
                            <div    className="image-overlay">
                                <span    className="fas fa-plus"></span>
                            </div>
                        </a>
                        <div    className="blog-info card-body blog-details">
                            <div    className="d-flex align-items-center justify-content-between">
                                <a href="#author"    className="post"><i    className="fas fa-user"></i> Mauree</a>
                                <h6    className="date"><i    className="fas fa-clock"></i> Nov 16, 2021.</h6>
                            </div>

                            <h4><a href="#blog"    className="blog-desc">
                                    Set a Fashion Trend!</a></h4>
                            <p    className="mt-3">At corrupti odit At iure facere,
                                porro repellat officia quas, magnam assumenda.</p>
                            <a href="#blog"    className="read">Read more</a>
                        </div>
                    </div>
                </div>
                <div    className="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div    className="grids5-info">
                        <a href="#blog"    className="blog-image d-block zoom"><img src="assets/images/blog2.jpg"
                                alt=""    className="img-fluid news-image" />
                            <div    className="image-overlay">
                                <span    className="fas fa-plus"></span>
                            </div>
                        </a>
                        <div    className="blog-info card-body blog-details">
                            <div    className="d-flex align-items-center justify-content-between">
                                <a href="#author"    className="post"><i    className="fas fa-user"></i> Alliees</a>
                                <h6    className="date"><i    className="fas fa-clock"></i> Nov 18, 2021.</h6>
                            </div>

                            <h4><a href="#blog"    className="blog-desc">How to Choose a Tie</a></h4>
                            <p    className="mt-3">At corrupti odit At iure facere,
                                porro repellat officia quas, magnam assumenda.</p>
                            <a href="#blog"    className="read">Read more</a>
                        </div>
                    </div>
                </div>
                <div    className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div    className="grids5-info">
                        <a href="#blog"    className="blog-image d-block zoom"><img src="assets/images/blog3.jpg"
                                alt=""    className="img-fluid news-image" />
                            <div    className="image-overlay">
                                <span    className="fas fa-plus"></span>
                            </div>
                        </a>
                        <div    className="blog-info card-body blog-details">
                            <div    className="d-flex align-items-center justify-content-between">
                                <a href="#author"    className="post"><i    className="fas fa-user"></i> Johnson</a>
                                <h6    className="date"><i    className="fas fa-clock"></i> Nov 20, 2021.</h6>
                            </div>

                            <h4><a href="#blog"    className="blog-desc">
                                Create Your new Style</a></h4>
                            <p    className="mt-3">At corrupti odit At iure facere,
                                porro repellat officia quas, magnam assumenda.</p>
                            <a href="#blog"    className="read">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     {/* //blog section  */} 

      {/*  footer  */}  
    <footer    className="w3l-footer-16 py-5">
        <div    className="container pt-md-5 pt-sm-4 pb-sm-2">
            <div    className="row">
                <div    className="col-lg-4">
                    <a    className="footer-logo d-flex align-items-center" href="index.html">
                        Dress<span>-Up</span></a>
                    <p    className="mt-3">Nam libero tempore, cum soluta nobis est elige endi optio cumque nihil impedit quo
                        minus id quod maxime placeat facere. Istee natuser iumedolo
                        ladase.</p>
                    <div    className="columns-2 mt-4">
                        <ul    className="social">
                            <li><a href="#facebook"><i    className="fab fa-facebook-f"></i></a>
                            </li>
                            <li><a href="#linkedin"><i    className="fab fa-linkedin-in"></i></a>
                            </li>
                            <li><a href="#twitter"><i    className="fab fa-twitter"></i></a>
                            </li>
                            <li><a href="#google"><i    className="fab fa-google-plus-g"></i></a>
                            </li>
                            <li><a href="#github"><i    className="fab fa-github"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div    className="col-lg-5 mt-lg-0 mt-5">
                    <div    className="row">
                        <div    className="col-xl-5 col-6 column">
                            <h3    className="">Quick Link</h3>
                            <ul    className="footer-gd-16">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="#blog">Blog Posts</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div    className="col-xl-5 col-6 column px-xxl-0">
                            <h3    className="">Contact Info</h3>
                            <ul    className="footer-contact-list">
                                <li    className="">10001, 5th Avenue,
                                    #32841 block, USA</li>
                                <li    className="mt-2"><a href="tel:+12 23456790">+1223 456 790</a></li>
                                <li    className="mt-2"><a href="mailto:info@example.com">info@example.com</a></li>
                                <li    className="mt-2"><a href="mailto:info@example.com">www.example.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div    className="col-lg-3 col-md-7 col-8 column mt-lg-0 mt-4">
                    <h3    className="">Opening Hours</h3>
                    <ul    className="list-footer-block">
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
            <div    className="below-section text-center pt-4 mt-5">
                <p    className="copy-text">&copy; 2021 Dress-Up. All rights reserved. Design by <a
                        href="https://w3layouts.com/" target="_blank" rel="noreferrer"> W3Layouts</a>
                </p>
            </div>
        </div>
    </footer>
     {/*  //footer  */}  

     {/*  Js scripts  */}  
     {/*  move top  */}  
    <button onclick="topFunction()" id="movetop" title="Go to top">
        <span    className="fas fa-level-up-alt" aria-hidden="true"></span>
    </button>
   

    </div>

    
  )
}

export default Index