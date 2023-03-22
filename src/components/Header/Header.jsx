import "./header.scss";
import logo from "./flash_cards.png";

function Header() {
  return (
    <div className="header">
      <div className="logo-block">
        <img src={logo} className="logo"></img>
        <div className="name">FleshCards</div>
      </div>
      <div className="button-block">
        <button className="enter">Войти</button>
        <button className="registration">Регистрация</button>
      </div>
    </div>
  );
}

export default Header;
