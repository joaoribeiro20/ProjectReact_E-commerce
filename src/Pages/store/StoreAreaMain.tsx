import { FC } from "react"
import Header from "../home/Header"
import { Link } from "react-router-dom"
import "./styleStore.scss"
const StoreAreaMain: FC = () => {
    return (
        <>
            <section>
                <Header />
                <div className="campoFilterAreaMain">
                    <div>
                        <Link to="/">Home</Link>
                    </div>

                    {/* --------------------------- */}
                    <div className="filterAreaMain">
                        <div className="filterProdutoCaracteristicas">
                            <div className="filterIntem">
                                <label htmlFor="torra">Torra</label>
                                <br />
                                <select name="torra" id="torra">
                                    <option value="clara">Clara</option>
                                    <option value="media">Media</option>
                                    <option value="escura">Escura</option>
                                </select>
                            </div>

                            <div className="filterIntem">
                                <label htmlFor="moagem">Moagem</label>
                                <br />
                                <select name="" id="">
                                    <option value="grossa">Grossa</option>
                                    <option value="media">Media</option>
                                    <option value="fina">Fina</option>
                                    <option value="grao">grao</option>
                                </select>
                            </div>

                            <div className="filterIntem">
                                <label htmlFor="moagem">Moagem</label>
                                <br />
                                <select name="" id="">
                                    <option value="grossa">Grossa</option>
                                    <option value="media">Media</option>
                                    <option value="fina">Fina</option>
                                    <option value="grao">grao</option>
                                </select>
                            </div>

                            <button>Filtrar</button>
                            <button>Limpar Filtro</button>
                        </div>
                        <div className="filterProdutoProdutoGeral"> 
                                <label htmlFor="moagem">Classificação por: </label>
                                <br />
                                <select name="" id="">
                                    <option value="grossa">Em Destaque</option>
                                    <option value="media">Peço: Do menor para maior</option>
                                    <option value="fina">Peço: Do maior para o menor</option>
                                    <option value="grao">Melhores avaliados</option>
                                    <option value="grao">Lançamentos e Mais novos</option>
                                </select>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}
export default StoreAreaMain