import { FC } from "react"
import Header from "../home/Header"

import "./styleStore.scss"
import CampoFilter from "./CampoFilter"
import Footer from "../home/Footer"
import { BsCartPlus,BsCupHot } from "react-icons/bs"
/* 

BsCardText
BsCartPlus
BsCartCheckFill
BsCupHotFill
BsCupHot

*/
const StoreAreaMain: FC = () => {
    return (
        <>
            <div>
                <Header />
                <CampoFilter />

                <div className="storeAreaMainProduto">
                    <div className="storeProduto">
                    <p>Cafe leagal</p><br />
                    <img  className="storeProdutoImg" src="../../../public/embalaegemCafeProduto.avif" alt="img" /><br />
                    
                    <p>R$ 26,59</p>
                    <div>
                        <button><BsCartPlus size={25} /></button>
                        <button><BsCupHot size={25} />Detalhes</button>
                    </div>
                    </div>
                    {/* --------------------------- */}
                    <div className="storeProduto">
                    <p>Cafe leagal</p><br />
                    <img  className="storeProdutoImg" src="../../../public/embalaegemCafeProduto.avif" alt="img" /><br />
                    
                    <p>R$ 26,59</p>
                    <div>
                        <button><BsCartPlus size={25} /></button>
                        <button><BsCupHot size={25} />Detalhes</button>
                    </div>
                    </div>
                    {/* --------------------------- */}
                    <div className="storeProduto">
                    <p>Cafe leagal</p><br />
                    <img  className="storeProdutoImg" src="../../../public/embalaegemCafeProduto.avif" alt="img" /><br />
                    
                    <p>R$ 26,59</p>
                    <div>
                        <button><BsCartPlus size={25} /></button>
                        <button><BsCupHot size={25} />Detalhes</button>
                    </div>
                    </div>
                    {/* --------------------------- */}
                    <div className="storeProduto">
                    <p>Cafe leagal</p><br />
                    <img  className="storeProdutoImg" src="../../../public/embalaegemCafeProduto.avif" alt="img" /><br />
                    
                    <p>R$ 26,59</p>
                    <div>
                        <button><BsCartPlus size={25} /></button>
                        <button><BsCupHot size={25} />Detalhes</button>
                    </div>
                    </div>
                    {/* --------------------------- */}
                    <div className="storeProduto">
                    <p>Cafe leagal</p><br />
                    <img  className="storeProdutoImg" src="../../../public/embalaegemCafeProduto.avif" alt="img" /><br />
                    
                    <p>R$ 26,59</p>
                    <div>
                        <button><BsCartPlus size={25} /></button>
                        <button><BsCupHot size={25} />Detalhes</button>
                    </div>
                    </div>
                    {/* --------------------------- */}
                    <div className="storeProduto">
                    <p>Cafe leagal</p><br />
                    <img  className="storeProdutoImg" src="../../../public/embalaegemCafeProduto.avif" alt="img" /><br />
                    
                    <p>R$ 26,59</p>
                    <div>
                        <button><BsCartPlus size={25} /></button>
                        <button><BsCupHot size={25} />Detalhes</button>
                    </div>
                    </div>
                    {/* --------------------------- */}
                    <div className="storeProduto">
                    <p>Cafe leagal</p><br />
                    <img  className="storeProdutoImg" src="../../../public/embalaegemCafeProduto.avif" alt="img" /><br />
                    
                    <p>R$ 26,59</p>
                    <div>
                        <button><BsCartPlus size={25} /></button>
                        <button><BsCupHot size={25} />Detalhes</button>
                    </div>
                    </div>
                    {/* --------------------------- */}
                    <div className="storeProduto">
                    <p>Cafe leagal</p><br />
                    <img  className="storeProdutoImg" src="../../../public/embalaegemCafeProduto.avif" alt="img" /><br />
                    
                    <p>R$ 26,59</p>
                    <div>
                        <button><BsCartPlus size={25} /></button>
                        <button><BsCupHot size={25} />Detalhes</button>
                    </div>
                    </div>
                    {/* --------------------------- */}
                    
                  
                </div>
            </div>
            <Footer />
        </>
    )
}
export default StoreAreaMain