import { FC } from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";


const home: FC = () =>{
    return(
        <>
        <Header/>
        <section className="homeAreaMain">
            <div className="homeAreaTituloTextos">
                <h1><strong className="homeTituloMain">Coffe</strong>.J</h1><br />
                <p>Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Asperiores corporis voluptate
                     iste consequuntur laborum repellat earum fugit 
                     vel enim eligendi ipsum 
                    sit non autem ab quisquam a, molestiae libero 
                    neque.</p><br />
                    <Link className="homeAreaTituloBtn" to="/Loja"> Loja</Link>
            </div>
            <div className="homeAreaImg">
                 <img className="homeImgMain" src="../../../public/pngegg (4).png" alt="IMG" height={450} width={550}/>
            </div>
        </section>
      <Content/>
      <Footer />
        </>
    )
}

export default home