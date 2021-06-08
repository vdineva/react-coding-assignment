import React from "react";

export default function Header(props) {
  return (
    <header className="Header">
      <a className="Header-logo" href="/">
        AcmeCompany
      </a>
      <div className="Header-favorites" onClick={props.displayFavorites}>
        Favorites ({props.numFavorites})
      </div>
    </header>
  );
}
