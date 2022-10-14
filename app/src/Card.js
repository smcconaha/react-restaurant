function Card({ title, description, price, category }) {
  return (

    <div className="card col-4 " style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {/* <p className="card-text">{description}</p> */}
        <p className="Card-text">
          {category}
        </p>
        <p className="Card-text">
          {price}
        </p>
        <p className="Card-text">
          {description}
        </p>
        <p className="Card-text">
          {title}
        </p>
      </div>
    </div>
  );
}

export default Card;