import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const header: FC = () =>{
    return(
        <>
        <section>
            <article><img src="" alt="" /></article>
            <article>
                <div>
                    <h3>Login</h3>
                    <h3>Loja</h3>
                </div>
                <button><FontAwesomeIcon icon={faAlgolia} /></button>
            </article>
        </section>
        </>
    )
}

export default header