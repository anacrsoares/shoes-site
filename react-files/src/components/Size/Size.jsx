import { useState } from "react";

export default function Sizes() {
  const shoeSizes = [33, 34, 35, 36, 37, 38, 39, 40];
  const [clickedIndex, setClickedIndex] = useState(null);

  function handleClick(index) {
    if (clickedIndex === null) {
      setClickedIndex(index);
      console.log(`Escolheu o sapato tamanho ${shoeSizes[index]}.`);
    } else if (clickedIndex !== null) {
      if (clickedIndex === index) {
        setClickedIndex(null);
        console.log(`Tirou o sapato tamanho ${shoeSizes[index]}.`);
      } else {
        setClickedIndex(index);
        console.log(`Escolheu o sapato tamanho ${shoeSizes[index]}.`);
      }
    }
  }

  return (
    <div className="product-sizes">
      <p>Escolha o tamanho:</p>

      <ul>
        {shoeSizes.map((item, index) => (
          <li
            key={index}
            id={index}
            onClick={() => handleClick(index)}
            style={{
              backgroundColor:
                clickedIndex === index ? "#aeb5ef" : "transparent",
              transform: clickedIndex === index ? "scale(1.15)" : "none",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
