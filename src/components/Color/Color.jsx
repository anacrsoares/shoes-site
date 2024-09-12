import { useState } from "react";

export default function Color() {
  const listColors = ["preto", "marrom", "vinho"];
  const [colorClicked, setColorClicked] = useState(null);

  function handleClick(index) {
    if (colorClicked === null) {
      setColorClicked(index);
      console.log(`Escolheu a cor ${listColors[index]}.`);
    } else if (colorClicked !== null) {
      if (colorClicked === index) {
        setColorClicked(null);
        console.log(`Tirou a cor ${listColors[index]}.`);
      } else {
        setColorClicked(index);
        console.log(`Escolheu a cor ${listColors[index]}.`);
      }
    }
  }
  return (
    <div className="choose-color">
      <p>Escolha a cor:</p>
      <ul className="product-colors">
        {listColors.map((item, index) => (
          <li
            key={index}
            id={index}
            onClick={() => handleClick(index)}
            style={{
              transform: colorClicked === index ? "scale(1.1)" : "scale(1)",

              border: colorClicked === index ? "2px solid green" : "",
            }}
          ></li>
        ))}
        {/* <li></li>
        <li></li>
        <li></li> */}
      </ul>
    </div>
  );
}
