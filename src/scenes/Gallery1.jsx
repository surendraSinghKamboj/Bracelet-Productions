import React from 'react'
import './Gallery.css';
function Gallery1() {
    return (
        <div>
            <b class="main-container">


                <header id="header-top">
                    <div class="banner">
                        <nav class="navbar">
                            <ul>
                                <li>
                                    <a href="#header-top">Home</a>
                                </li>
                                <li>
                                    <a href="#story">Our Story</a>
                                </li>
                                <li>
                                    <a href="#wedding">Wedding</a>
                                </li>
                                <li>
                                    <a href="#getting-there">Getting There </a>
                                </li>
                            </ul>
                        </nav>
                        <div class="banner-text">
                            <h2> John and Mary</h2>
                            <p>2023 : 04 : 04 | 1900 | Lagos Nigeria</p>
                            <br />
                            <button class="btn-banner">
                                <a href="">RSVP</a>
                            </button>
                        </div>
                    </div>

                </header>


                <section id="story" class="our-story">
                    <h3>Our Story</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sunt officiis ad,
                    </p>
                    <div class="container">
                        <div class="img-story">
                            <div class="img-001">
                                <img src="https://s9.postimg.cc/yei47yekf/image-001.jpg" alt="image-001" />
                            </div>
                            <div class="img-001">
                                <img src="https://s9.postimg.cc/o4fp8swfj/image-002.jpg" alt="image-001" />
                            </div>
                            <div class="img-001">
                                <img src="https://s9.postimg.cc/tslzzu5yn/image-003.jpg" alt="image-001" />
                            </div>
                            <div class="img-001">
                                <img src="https://s9.postimg.cc/9l8k7llcv/image-004.jpg" alt="image-001" />
                            </div>
                            <div class="img-001">
                                <img src="https://s9.postimg.cc/br2v1lwdr/image-005.jpg" alt="image-001" />
                            </div>
                            <div class="img-001">
                                <img src="https://s9.postimg.cc/6sfcn4ib3/image-006.jpg" alt="image-001" />
                            </div>
                        </div>
                    </div>


                </section>


                <section id="wedding" class="wedding">
                    <h3>Wedding</h3>
                    <div class="flexbox">
                        <div class="box-01">
                            <h3>When</h3>
                            <p>18 May 2023, 19:00</p>

                        </div>
                        <div class="box-02">
                            <h3>Where</h3>
                            <p>White Chapel Yaba Sabo, Lagos Nigeria </p>

                        </div>
                    </div>
                    <button class="btn-register">
                        <a href="">
                            Register
                        </a>
                    </button>

                </section>


                <section id="getting-there" class="getting-there">
                    <div class="gt-text">
                        <h3>Getting There</h3>
                        <h4>TRANSPORTATION</h4>
                        <p> I’m a great place for you to tell a story and
                            let your users know a little more about you.</p>

                        <h4>ACCOMMODATION</h4>
                        <p> I’m a great place for you to tell a story and
                            let your users know a little more about you.</p>
                    </div>
                </section>


         </b>


        </div>

   
  )
}

export default Gallery1;