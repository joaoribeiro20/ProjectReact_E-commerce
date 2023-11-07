import { FC } from "react";
import "./styleHome.scss"

const header: FC = () =>{
    return(
        <>
        <section className="HeaderAreaMain">
            <article className="logoHeaderArea"><img src="" alt="logoDaLoja" /></article>
            <article className="menuHeaderArea">
                <div className="linksHeaderArea">
                    <h3 className="linksHeader">Login</h3>
                    <h3 className="linksHeader">Loja</h3>
                </div>
                <button>a</button>
            </article>
        </section>
        </>
    )
}

export default header