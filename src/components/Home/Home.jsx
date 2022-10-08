import {Link} from "react-router-dom";

const Home = ({ title}) => {
    return(
    <>
      <section>
        <div className="contenedorItemList">
          <article className="contenedorTextos">
            <h1>{title}</h1>
            <p>
              ¡Permite que Teclam te acompañe mientras haces magia!
               Vení a conocer los
              mejores productos.
            </p>
            <Link className='comprar' to="/products">Ver más</Link>
          </article>
        </div>
      </section>
    </>
    )
}

export default Home;