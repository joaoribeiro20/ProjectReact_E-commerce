import { FC } from "react";

const footer: FC = () =>{
    return(
        <section className="areaFooterMain">
            <div className="areaFooterSobre">
                <h3>Saiba mais sobre nos!!</h3>
                <a href="">instagram</a>
                <a href="">blog</a>
            </div>
            <div className="areaFooterParceiros"> 
                <h3>Parceiros</h3>
                <img src="" alt="img" />
                <img src="" alt="img" />
                <img src="" alt="img" />
            </div>
        </section>
    )
}

export default footer