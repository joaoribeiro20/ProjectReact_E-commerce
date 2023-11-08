import { FC, useState } from "react";
import "./styleHome.scss"
import { BsJustify } from "react-icons/bs";
import { Link } from "react-router-dom";

const header: FC = () => {
    const [menu, setMenu] = useState(false)

    function teste() {
        setMenu(!menu)
    }

    return (
        <>
            <section className="HeaderAreaMain">
                <article className="logoHeaderArea"><img width={50} src="../../../public/pngegg (5).png" alt="logoDaLoja" /></article>
                <article className="menuHeaderArea">
                    <div className="linksHeaderArea">
                        {menu ? (<h3>leagal</h3>) : (<h3></h3>)}
                        <Link className="linksHeader" to="/Login">Login</Link>
                        <Link className="linksHeader" to="/Loja">Loja</Link>
                        
                    </div>
                    <button className="btnHeaderIconeMenu" onClick={teste}><BsJustify size={25} /></button>
                </article>
            </section>
        </>
    )
}

export default header