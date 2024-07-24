import img from "../assets/tab.jpg"


function Card() {
  return (
    <section>
      <div>
        <img src={img} alt="samusung tab" width="300px" height="200px"/>
      </div>

      <p>This item: Samsung Tab;</p>
      <p>Price: $950</p>
      <button className="btn">Add to cart</button>
    </section>
  );
}

export default Card;
