import "./Comments.css";

export default function Comments() {
  return (
    <div>
      <ul className="comments-list">
        <li className="comment-item">
          <h3>
            Maria Silva <span className="comment-date">01/09/2024</span>
          </h3>
          <div className="rating">★★★★☆</div>
          <p className="comment-text">
            Adorei o produto! A qualidade é excelente e o atendimento foi
            incrível. Com certeza voltarei a comprar!
          </p>
        </li>
        <li className="comment-item">
          <h3>
            João Pereira <span className="comment-date">28/08/2024</span>
          </h3>
          <div className="rating">★★★★★</div>
          <p className="comment-text">
            Produto superou minhas expectativas. A cor e o acabamento são
            impecáveis. Recomendo!
          </p>
        </li>
        <li className="comment-item">
          <h3>
            Ana Costa <span className="comment-date">15/08/2024</span>
          </h3>
          <div className="rating">★★★☆☆</div>
          <p className="comment-text">
            Recebi o produto antes do prazo e fiquei muito satisfeita com a
            compra. Excelente qualidade e conforto.
          </p>
        </li>
      </ul>
    </div>
  );
}
