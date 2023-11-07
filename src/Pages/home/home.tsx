import { FC } from "react";
import Content from "./content";
import Header from "./header";


const home: FC = () =>{
    return(
        <>
        <Header/>
        <section>
            <div>
                <h1>Coffe <span>Ribeiro</span></h1>
            </div>
            <div>
                 <img src="../../../public/CoffeMain.png" alt="IMG" height={450} width={550}/>
            </div>
        </section>
      <Content/>
        </>
    )
}

export default home