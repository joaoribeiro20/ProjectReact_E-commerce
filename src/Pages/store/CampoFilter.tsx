import { FC } from "react"
import { BsFillHousesFill, BsFilter } from "react-icons/bs"
import { Link } from "react-router-dom"
import "./styleStoreFilters.scss"

const CampoFilter: FC = ()=>{
    return(
        <section>
       
        <div className="campoFilterAreaMain">
            <div className="filterAreaLinkHome">
                <Link to="/"><BsFillHousesFill size={25} /> Home</Link>
            </div>

            {/* --------------------------- */}
            <div className="filterAreaMain">
                <div className="filterProdutoCaracteristicas">
                    <div className="filterIntem">
                        <select name="torra" id="torra">
                        <option value="">Torra</option>
                            <option value="clara">Clara</option>
                            <option value="media">Media</option>
                            <option value="escura">Escura</option>
                        </select>
                    </div>

                    <div className="filterIntem">
                        <select name="" id="">
                        <option value="">Moagem</option>
                            <option value="grossa">Grossa</option>
                            <option value="media">Media</option>
                            <option value="fina">Fina</option>
                            <option value="grao">grao</option>
                        </select>
                    </div>

                    <div className="filterIntem">
                        <select name="" id="">
                            <option value="grossa">Regial</option>
                            <option value="media">Media</option>
                            <option value="fina">Fina</option>
                            <option value="grao">grao</option>
                        </select>
                    </div>

                    <button><BsFilter size={25} />Filtrar</button>
                    <button>Limpar Filtro</button>
                </div>
                <div className="filterProdutoProdutoGeral"> 
                        <label htmlFor="moagem">Classificação por: </label>
                        
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
    )
}

export default CampoFilter