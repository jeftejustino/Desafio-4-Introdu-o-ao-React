import React from 'react';

function Header(){
  return(
    <header className="topo">
      <div className="flex">
        <div className="logo"><img src="https://i.imgur.com/KDIDiSE.png" alt="logo"/></div>
        <div className="perfil">
          Meu Perfil <i className="material-icons">account_circle</i>
        </div>
      </div>
    </header>
  )
}

export default Header;