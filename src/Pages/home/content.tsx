import { FC } from "react";
import "./styleHome.scss"

const content: FC = () => {
    return (
        <>
        <SimpleSlider />
            <section className="areaMainConteudo">
                <div className="areaConteudoText ">
                    <div className="imgareaConteudo one"><img  src="../../../public/imgCafeEspecial.jpg" alt="img" /></div>
                    <div className="one">
                    <h2>Sabia que existe uma grande diferença entre cafes?</h2><br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia facere perferendis nam iure accusantium! Id blanditiis, amet labore soluta laudantium reiciendis alias omnis temporibus dolor quidem odio. Eaque, non possimus?</p>
                    </div>
                </div>
                <div className="areaConteudoText ">
                    <div className="two">
                    <h2>Vantagens de um cafe de qualidade</h2><br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia facere perferendis nam iure accusantium! Id blanditiis, amet labore soluta laudantium reiciendis alias omnis temporibus dolor quidem odio. Eaque, non possimus?</p>
                    
                    </div>
                     <div className="imgareaConteudo two"><img  src="../../../public/imgCafeEspecial2.jpg" alt="img" /></div>
                </div>

            </section>

            <section>
                <h2>Voce ainda não faz parte da nossa equite de vendedores??</h2>
                <h3>Entao torna-se agora um de nossos vendedores!! </h3>
            </section>
        </>
    )
}

export default content