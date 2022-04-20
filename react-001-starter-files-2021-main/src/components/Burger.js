import React from "react";

class Burger extends React.Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };
  render() {
    const { image, name, price, desc, status } = this.props.details;

    const isAvilable = status === "available";
    return (
      <li className="menu-burger">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>

        <div className="burger-details">
          <h3 className="burger-name">
            {name}
            <span className="price">{price} BYN</span>
          </h3>
          <p>{desc}</p>
          <button 
          className="buttonOrder" 
          disabled={!isAvilable}
          onClick={this.handleClick}>
            {isAvilable ? "Заказать" : "Временно нет"}
          </button>
          
        </div>
      </li>
    );
  }
}

export default Burger;
