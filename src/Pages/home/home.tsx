import { FC } from "react";
import Content from "./content";
import Header from "./header";


const home: FC = () =>{
    return(
        <>
        <Header/>
        <section className="homeAreaMain">
            <div className="homeAreaTituloTextos">
                <h1><strong className="homeTituloMain">Coffe</strong>  Ribeiro</h1>
                <p>Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Asperiores corporis voluptate
                     iste consequuntur laborum repellat earum fugit 
                     vel enim eligendi ipsum 
                    sit non autem ab quisquam a, molestiae libero 
                    neque.</p>
                    <button>bora la</button>
            </div>
            <div className="homeAreaImg">
                 <img className="homeImgMain" src="../../../public/CoffeMain.png" alt="IMG" height={450} width={550}/>
            </div>
        </section>
      <Content/>
        </>
    )
}

export default home