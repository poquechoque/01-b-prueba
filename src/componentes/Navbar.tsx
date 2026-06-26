function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Mi Tienda</h2>

      <div className="nav-buttons">
        <button>Perfil</button>
        <button>Catálogo</button>
        <button>Carrito</button>
        <button>Contactos</button>
      </div>
    </nav>
  );
}

export default NavBar;