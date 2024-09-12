import { useState } from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.webp";
import img6 from "./assets/img6.webp";
import img7 from "./assets/img7.webp";
import img8 from "./assets/img8.webp";
import img9 from "./assets/img9.webp";
import Size from "./components/Size/Size.jsx";
import Color from "./components/Color/Color.jsx";
import Buttons from "./components/Buttons/Buttons.jsx";
import Card from "./components/Card/Card.jsx";
import Comments from "./components/Comments/Comments.jsx";

export default function App() {
  window.addEventListener("load", () => {
    if (window.innerWidth >= 770) {
      setIsMenu(true);
    } else {
      setIsMenu(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 770) {
      setIsMenu(true);
    } else {
      setIsMenu(false);
    }
  });

  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className="container-view">
      <header>
        <nav className="navbar">
          <div className="menu-toggle" onClick={toggleMenu}>
            <button>=</button>
          </div>

          {isMenu && (
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Novidades</a>
              </li>
              <li>
                <a href="#">Feminino</a>
              </li>
              <li>
                <a href="#">Masculino</a>
              </li>
              <li>
                <a href="#">Infantil</a>
              </li>
              <li>
                <a href="#" className="menu-emphasis">
                  Outlet
                </a>
              </li>
            </ul>
          )}
        </nav>
      </header>
      <main>
        <div className="title">
          <h1>Bota Lia</h1>
          <h2>Bota de couro com salto feito à mão</h2>
        </div>

        <div className="product">
          <div className="product-images">
            <img src={img1} alt="Produto Principal" className="main-image" />
            <div className="thumbnail-images">
              <img src={img2} alt="Produto 1" className="thumbnail-image" />
              <img src={img3} alt="Produto 2" className="thumbnail-image" />
              <img src={img4} alt="Produto 3" className="thumbnail-image" />
            </div>
          </div>

          <div className="product-informations">
            <p className="product-price">R$ 199,99</p>
            <p className="product-description">
              A Bota Lia oferece elegância e conforto em três cores
              sofisticadas: Preto, Vinho e Marrom. Com um design moderno e
              versátil, esta bota é ideal para qualquer ocasião, garantindo um
              visual estiloso e uma sensação de conforto duradouro. O salto
              robusto de 10 cm proporciona estabilidade e o toque refinado das
              cores adiciona um toque de glamour a cada passo. Disponível do
              tamanho 33 ao 40, a Bota Lia é a escolha perfeita para quem busca
              combinar estilo e funcionalidade.
            </p>

            <Size />
            <Color />
            <Buttons />
          </div>
          <br />
          <br />
        </div>

        <div className="related">
          <h2>Produtos Relacionados</h2>
          <div className="related-cards">
            <Card title="Sandália Montenegro" img={img5} price="R$ 299,90" />
            <Card title="Bota Hayley" img={img6} price="R$ 449,90" />
            <Card title="Coturno Bem-te-Vi" img={img7} price="R$ 699,90" />
            <Card title="Bota Salto Agulha" img={img8} price="R$ 449,90" />
            <Card title="Sandália João-de-Barro" img={img9} price="R$ 259,90" />
          </div>
        </div>

        <div className="comments">
          <h2>Comentários e Avaliações</h2>
          <Comments />
        </div>
      </main>

      {/* <footer></footer> */}
    </div>
  );
}
