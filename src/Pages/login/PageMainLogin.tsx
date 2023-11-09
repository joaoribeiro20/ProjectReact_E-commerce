import { FC } from "react"
import "./styleLogin.scss"
import { Link } from "react-router-dom"

const PageMainLogin: FC = () => {
    return (
        <>
            <section className="areaLoginMain">
                <div className="areaLoginMainImg">
                    <div className="imgLogin">
                        <img src="../../../public/undraw_coffee_re_x35h.svg" alt="" />
                    </div>

                </div>
                <div className="areaLoginMainforms">
                    <div className="formsLogin">
                        <h2>Login</h2><br />

                        <form >
                            <div>
                                <label htmlFor="">Email</label><br />
                                <input className="inputFormsLogin" type="text" name="" id="" />
                            </div>
                            <div>
                                <label htmlFor="">Passaword</label><br />
                                <input className="inputFormsLogin" type="text" name="" id="" />
                            </div>
                            <Link className="LinkHomePageLogin" to="/">Home</Link><br />
                            <button className="btnTelaLogin">Entrar</button> 
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}
export default PageMainLogin