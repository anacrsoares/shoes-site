import "./Buttons.css";
import { useState } from "react";

export default function Buttons() {
  const [buy, setBuy] = useState(false);
  const [cart, setCart] = useState(false);

  const handleBuy = () => {
    setBuy(!buy);
  };

  const handleCart = () => {
    setCart(!cart);
  };

  return (
    <div className="buttons">
      <button
        className="button buy-now"
        onClick={handleBuy}
        style={{ background: buy ? "black" : "#ca3145" }}
      >
        Comprar
      </button>
      <button
        className="button add-to-cart"
        onClick={handleCart}
        style={{ background: cart ? "black" : "#333" }}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
