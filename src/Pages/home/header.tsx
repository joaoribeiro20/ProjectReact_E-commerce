import { FC, useState } from "react";
import "./styleHome.scss"
import {BsTextLeft,BsCart4,BsFillBagFill,BsFillPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const header: FC = () => {
    const [menu, setMenu] = useState(false)

    function teste() {
        setMenu(!menu)
    }

    return (
        <>
            <section className="HeaderAreaMain">
                <article><button className="areaHeaderBtnMenu"><BsTextLeft size={30} /></button></article>
                <article className="logoHeaderArea">
                    <img width={50} src="../../../public/pngegg (5).png" alt="logoDaLoja" /><p>Coffe.J</p>
                </article>
                <article className="menuHeaderArea">
                    <div className="linksHeaderArea">
                        {menu ? (<h3>leagal</h3>) : (<h3></h3>)}
                        <Link className="linksHeader" to="/Loja"><BsFillBagFill size={25} /></Link>
                        <Link className="linksHeader" to="/Login"><BsFillPeopleFill size={25} /></Link>
                        <Link className="linksHeader" to="/Login"><BsCart4 size={25} /></Link>
                    </div>
                    {/* <button className="btnHeaderIconeMenu" onClick={teste}><BsJustify size={25} /></button> */}
                </article>
            </section>
        </>
    )
}

export default header