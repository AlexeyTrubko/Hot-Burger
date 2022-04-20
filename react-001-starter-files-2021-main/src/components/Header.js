import React from "react";


const Header = props => (
        <header className="top">
          <div className="wrap">
            <div className="header-content">
              <div className="header-rating">
                <div className="header-tag">Rating </div>
                <div className="header-icon">★★★★★</div>
              </div>
              <div className="header-divider"></div>
              <h1 className="font-effect-fire-animation">{props.title}</h1>
              <h3>
                <span>
                  Быстрая доставка горячих
                  <span className="sub-header">#бургеров</span>
                </span>
              </h3>
            </div>
          </div>
        </header>
      );



/* class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <div className="wrap">
          <div className="header-content">
            <div className="header-rating">
              <div className="header-tag">Rating </div>
              <div className="header-icon">★★★★★</div>
            </div>
            <div className="header-divider"></div>
            <h1 className="font-effect-fire-animation">{this.props.title}</h1>
            <h3>
              <span>
                Быстрая доставка горячих
                <span className="sub-header">#бургеров</span>
              </span>
            </h3>
          </div>
        </div>
      </header>
    );
  }
} */

export default Header;
