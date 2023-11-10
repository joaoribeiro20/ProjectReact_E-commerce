import { FC } from "react"
import "./styleLogin.scss"
import { Link } from "react-router-dom"
import { BsFillHousesFill, BsFillPersonPlusFill } from "react-icons/bs"

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
                        <div className="titulo">
                           <h2>Login</h2><br /> 
                        </div>
                        

                        <form >
                            <div className="teste">
                                <label htmlFor="">Email</label>     
                                <input className="inputFormsLogin" type="text" name="" id="" />
                            </div>
                            <div className="teste">
                                <label htmlFor="">Passaword</label> 
                                <input className="inputFormsLogin" type="text" name="" id="" />
                            </div>

                            <div className="areaTeste">
                                <div className="testeL">
                                    <input className="legal" type="checkbox" />
                                    <p>concordo os termos de seguraça</p> 
                                </div>
                           <div>
                            <a href="" className="testeA">Esqueceu a senha</a>
                           </div>
                            
                          </div>
                          <button className="btnTelaLogin">Entrar</button>
                          </form>   
                             Nao tem uma conta?<Link className="LinkHomePageLogin testeA" to="/">Inscreva-se</Link>
                            {/* <Link className="LinkHomePageLogin" to="/"><BsFillHousesFill size={25} /></Link>
                            <Link className="BsFillPersonPlusFill" to="/"><BsFillPersonPlusFill size={25} /></Link>
                           */}
                        
                    </div>
                </div>
            </section>

        </>
    )
}
export default PageMainLogin