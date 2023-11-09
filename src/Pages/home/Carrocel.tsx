
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styleHome.scss"

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 6500,
            autoplaySpeed: 100,
            cssEase: "linear"
        };
        return (
          <div className="teste">

           <div className="aa">

             <h2>Conheça alguns dos produtos disponiveis na nossa loja</h2>
            <Slider {...settings}>
              <div className="divIntem">
                <div className="testew">
                    <h2>legal</h2>
                    <br />
                    <img  src="../../../public/imgCafeEspecial.jpg" alt="img" />
            <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, nemo culpa ad odit, vero fuga minus deleniti dolor repudiandae, corrupti accusantium! Nostrum aut perferendis hic minima molestias sunt voluptatum voluptatem.</p>
                    <br />
                    <ul>
                    <li><h3>indensidade: media</h3></li>
                      <li><h3>acidez: media</h3></li>
                      <li><h3>dociura: media</h3></li>
                      <li><h3>dociura: media</h3></li>
                    </ul>
                </div>
              </div>
              <div className="divIntem">
                <div className="testew">
                    <h2>legal</h2>
                    <img  src="../../../public/imgCafeEspecial.jpg" alt="img" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, nemo culpa ad odit, vero fuga minus deleniti dolor repudiandae, corrupti accusantium! Nostrum aut perferendis hic minima molestias sunt voluptatum voluptatem.</p>
                    <br />
                    <ul>
                    <li><h3>indensidade: media</h3></li>
                      <li><h3>acidez: media</h3></li>
                      <li><h3>dociura: media</h3></li>
                      <li><h3>dociura: media</h3></li>
                    </ul>
                </div>
              </div>
              <div className="divIntem">
              <div className="testew">
                    <h2>legal</h2>
                    <img  src="../../../public/imgCafeEspecial.jpg" alt="img" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, nemo culpa ad odit, vero fuga minus deleniti dolor repudiandae, corrupti accusantium! Nostrum aut perferendis hic minima molestias sunt voluptatum voluptatem.</p>
                    <br />
                    <ul>
                      <li><h3>indensidade: media</h3></li>
                      <li><h3>acidez: media</h3></li>
                      <li><h3>dociura: media</h3></li>
                      <li><h3>dociura: media</h3></li>
                    </ul>
                </div>
              </div>
              <div className="divIntem">
                <div className="testew">
                <h2>legal</h2>
                    <ol>
                        <li>sla</li>
                        <li>sla</li>
                        <li>sla</li>

                        <li>sla</li>
                        <li>sla</li>
                    </ol>
                </div>
              </div>
              <div className="divIntem">
                <div className="testew">
                <h2>legal</h2>
                    <ol>
                        <li>sla</li>
                        <li>sla</li>
                        <li>sla</li>

                        <li>sla</li>
                        <li>sla</li>
                    </ol>
                </div>
              </div>
            </Slider>
           </div>
           
          </div>
        );
      } 
}