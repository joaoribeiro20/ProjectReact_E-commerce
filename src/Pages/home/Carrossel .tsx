
import { Component } from "react";
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
          <div className="divMainCarrossel">
           <div className="divComponetsCarrossel">
             <h2 className="tituloMainCarrossel">Conheça alguns dos produtos disponiveis na nossa loja</h2>
            <Slider {...settings}>

              <div className="divItemCarrossel">
                <div className="itemCarrossel">
                    <h2>Cafe Sul de minas</h2><br />
                    <img  src="../../../public/imgCafeEspecial.jpg" alt="img" /><br />
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
              {/* ---------------------------------------- */}
              <div className="divItemCarrossel">
                <div className="itemCarrossel">
                    <h2>Cafe Sul de minas</h2><br />
                    <img  src="../../../public/imgCafeEspecial.jpg" alt="img" /><br />
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

              {/* ---------------------------------------- */}
              <div className="divItemCarrossel">
                <div className="itemCarrossel">
                    <h2>Cafe Sul de minas</h2><br />
                    <img  src="../../../public/imgCafeEspecial.jpg" alt="img" /><br />
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
              {/* ---------------------------------------- */}
              <div className="divItemCarrossel">
                <div className="itemCarrossel">
                    <h2>Cafe Sul de minas</h2><br />
                    <img  src="../../../public/imgCafeEspecial.jpg" alt="img" /><br />
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
              {/* -------------------------------------- */}
              <div className="divItemCarrossel">
                <div className="itemCarrossel">
                    <h2>Cafe Sul de minas</h2><br />
                    <img  src="../../../public/imgCafeEspecial.jpg" alt="img" /><br />
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
              {/* --------------------------------------- */}
              <div className="divItemCarrossel">
                <div className="itemCarrossel">
                    <h2>Cafe Sul de minas</h2><br />
                    <img  src="../../../public/imgCafeEspecial.jpg" alt="img" /><br />
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
            </Slider>
           </div>
          </div>
        );
      } 
}